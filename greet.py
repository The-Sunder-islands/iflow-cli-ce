import getpass

def greet(user=None):
    """Print a greeting to the user."""
    name = user or getpass.getuser()
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet()
