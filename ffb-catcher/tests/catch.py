# This script is used to get all the card UIDs then sort them out to assure we're able to have
# a finite and unique collection of UIDs.
import io
from contextlib import redirect_stderr
from py_acr122u.error import InstructionFailed, NoCommunication
from os import get_terminal_size, system as syscmd
from py_acr122u.nfc import Reader
from typing import Union
import sys

print('Python %s on %s' % (sys.version, sys.platform))


# ----------------------------------------------------------------------------------------------------------------------
# Function definition
# ----------------------------------------------------------------------------------------------------------------------


def cut_term_x(cutting_char: str = "-") -> None:
    global termX

    print("\n")
    print(cutting_char * termX)
    print("\n")

def openFFBWatcher(uid: Union[tuple, list]) -> None:
    UID = [str(_uid) for _uid in uid]
    sUID = "".join(UID)
    URL = f"http://10.248.0.209:3000/?cardID={sUID}"
    print(f"Opening for UID: {sUID}")

    if sys.platform == "win32":
        syscmd(f'pwsh .\launch.ps1 {URL}')

# ----------------------------------------------------------------------------------------------------------------------
# Scripting
# ----------------------------------------------------------------------------------------------------------------------


termX, termY = 60, 10

try:
    termX, termY = get_terminal_size()
except OSError:
    print(f"[ERROR]: Can't get terminal size")

listening = True
uids = []
ready_to_remove = False     # Variable to control when to remove the card
# Variable to control if we already raised the KeyError exception
already_raised_keyerror = False

print("Register and sort script, those are the following steps to do:")
print("\t- Scan card one by one, look at the terminal for instructions")
print("\t- Then do Ctrl+C when finished scanning cars to start the sorting algorithm")
print("\t- Wait for results to appear\n")
print("\t Good luck!")
cut_term_x()


with redirect_stderr(io.StringIO()) as f:
    print("I'm listening...")
    while listening:
        try:
            reader = Reader()
            state = reader.instantiate_reader()

            if not ready_to_remove:
                reader.connect()
                card_uid = reader.get_uid()
                print(f"Adding new card {card_uid}")
                openFFBWatcher(card_uid)
                ready_to_remove = True

            if ready_to_remove and not already_raised_keyerror:
                already_raised_keyerror = True
                raise KeyError

            if ready_to_remove and already_raised_keyerror:
                try:
                    reader.connect()
                except NoCommunication:
                    ready_to_remove = False
                    already_raised_keyerror = False
                    print("[INFO]: Card Removed!")
                    print("[INFO]: Now listening...")

        except KeyError:
            # Custom Error raising to let know the user to remove
            # the current card and place another on the reader
            print(f"[INFO]: You can remove the card")

        except NoCommunication:
            pass

        except InstructionFailed:
            print(
                f"[WARNING]: Was currently executing some instructions on the card!")

        except AttributeError:
            pass

        except KeyboardInterrupt:
            listening = False
            print("Ending listening, now sorting data...")
