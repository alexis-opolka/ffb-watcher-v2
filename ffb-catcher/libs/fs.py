import os


def path_exists(path: str) -> str:

    """
    Assures a path exists if not already existing.
    :param path:str
    :return:
    """

    filename = path.split('/')[-1]
    _path = "/".join(path.split('/')[:-1])

    if os.path.exists(_path):
        return path

    else:
        os.makedirs(_path)

        return path
