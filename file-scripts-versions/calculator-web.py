import streamlit as st

# Função principal
def main():
    st.title("🧮 Python Calculator")

    # Menu de seleção
    operation = st.selectbox(
        "Select the desired operation:",
        options=[
            ("Addition", 1),
            ("Subtraction", 2),
            ("Multiplication", 3),
            ("Division", 4)
        ],
        format_func=lambda op: op[0]
    )[1]

    # Entradas numéricas
    number1 = st.number_input("Enter the first number:", format="%.2f")
    number2 = st.number_input("Enter the second number:", format="%.2f")

    # Botão para calcular
    if st.button("Calculate"):
        result, operator = perform_calculation(operation, number1, number2)

        if result is not None:
            st.success(f"Result: {number1} {operator} {number2} = {result:.2f}")
        else:
            st.error("Division by zero is not allowed.")

# Função de cálculo
def perform_calculation(operation, number1, number2):
    if operation == 1:
        return number1 + number2, "+"
    elif operation == 2:
        return number1 - number2, "-"
    elif operation == 3:
        return number1 * number2, "*"
    elif operation == 4:
        if number2 == 0:
            return None, "/"
        return number1 / number2, "/"
    return None, "?"

if __name__ == "__main__":
    main()
