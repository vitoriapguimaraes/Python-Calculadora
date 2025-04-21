import sys
import timeit
from colors import Colors

def print_title():
    print(Colors.YELLOW)
    print(f"{' Python Calculator ':*^40}")
    print(Colors.RESET)

def print_menu():
    print(Colors.WHITE)
    print("Select the desired operation:")
    print(Colors.RESET)
    print("1 - Addition")
    print("2 - Subtraction")
    print("3 - Multiplication")
    print("4 - Division")

def validate_number(value):
    try:
        return float(value)
    except ValueError:
        print("\nInvalid input. Please enter a valid number.")
        sys.exit()

def get_user_input(prompt):
    return validate_number(input(prompt))

def perform_calculation(operation, number1, number2):
    if operation == 1:
        result = number1 + number2
        operator = "+"
    elif operation == 2:
        result = number1 - number2
        operator = "-"
    elif operation == 3:
        result = number1 * number2
        operator = "*"
    elif operation == 4:
        try:
            result = number1 / number2
        except ZeroDivisionError:
            print(Colors.RED)
            print("\nDivision by zero is not allowed.")
            print(Colors.RESET)
            return
        else:
            operator = "/"
    else:
        print("\nInvalid operation.")
        return

    print(f"\n{number1} {operator} {number2} = {result:.2f}")

def main():
    print_title()
    print_menu()

    valid_options = ["1", "2", "3", "4"]
    operation_input = input("\nEnter your option (1/2/3/4): ")

    if operation_input not in valid_options:
        print("\nInvalid option. Please choose a valid number.")
        sys.exit()

    operation = int(operation_input)
    number1 = get_user_input("\nEnter the first number: ")
    number2 = get_user_input("\nEnter the second number: ")

    perform_calculation(operation, number1, number2)

    print("-" * 50)

    exec_time = timeit.timeit('sum(range(1000))', number=10000)
    print(f"Execution time: {exec_time:.3f} seconds")

if __name__ == "__main__":
    main()
