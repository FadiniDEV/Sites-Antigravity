css_file = 'styles.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

def check_braces(text):
    count = 0
    for i, char in enumerate(text):
        if char == '{':
            count += 1
        elif char == '}':
            count -= 1
        if count < 0:
            print(f"Error: Unmatched closing brace at index {i}")
            return
    if count != 0:
        print(f"Error: {count} unclosed opening braces")
    else:
        print("Braces are balanced.")

check_braces(css)
