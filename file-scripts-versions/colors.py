# ANSI color codes for terminal output
# Based on Rene-d's original gist: https://gist.github.com/rene-d/9e584a7dd2935d0f461904b9f2950007

import sys
import platform
import ctypes

class Colors:
    """ANSI escape codes for terminal text styling."""
    
    BLACK = "\033[0;30m"
    RED = "\033[0;31m"
    GREEN = "\033[0;32m"
    BROWN = "\033[0;33m"
    BLUE = "\033[0;34m"
    PURPLE = "\033[0;35m"
    CYAN = "\033[0;36m"
    LIGHT_GRAY = "\033[0;37m"
    DARK_GRAY = "\033[1;30m"
    LIGHT_RED = "\033[1;31m"
    LIGHT_GREEN = "\033[1;32m"
    YELLOW = "\033[1;33m"
    LIGHT_BLUE = "\033[1;34m"
    LIGHT_PURPLE = "\033[1;35m"
    LIGHT_CYAN = "\033[1;36m"
    WHITE = "\033[1;37m"

    BOLD = "\033[1m"
    FAINT = "\033[2m"
    ITALIC = "\033[3m"
    UNDERLINE = "\033[4m"
    BLINK = "\033[5m"
    INVERT = "\033[7m"
    STRIKETHROUGH = "\033[9m"

    RESET = "\033[0m"

# Remove escape codes if not in a terminal
if not sys.stdout.isatty():
    for attr in dir(Colors):
        if not attr.startswith("_"):
            setattr(Colors, attr, "")

# Enable ANSI escape codes on Windows
elif platform.system() == "Windows":
    ctypes.windll.kernel32.SetConsoleMode(
        ctypes.windll.kernel32.GetStdHandle(-11), 7
    )

# Test print when run directly
if __name__ == "__main__":
    for attr in dir(Colors):
        if not attr.startswith("_") and attr != "RESET":
            code = getattr(Colors, attr)
            print(f"{attr:>20}: {code}{attr}{Colors.RESET}")
