from py_acr122u.nfc import (
    Reader
)


try:
    print("Listening to an NFC card...")
    reader = Reader()
    state = reader.instantiate_reader()

    reader.connect()
    print("UID:", reader.get_uid())

except KeyboardInterrupt:
    print("Ending listening...")

print("Goodbye !")
