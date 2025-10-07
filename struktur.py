import os

EXCLUDE_DIRS = {"node_modules", ".next", ".git", "__pycache__"}
OUTPUT_FILE = "struktur.txt"

def list_dir(path=".", prefix=""):
    items = sorted(os.listdir(path))
    lines = []
    for i, item in enumerate(items):
        if item in EXCLUDE_DIRS or item.startswith("."):
            continue

        full_path = os.path.join(path, item)
        connector = "└── " if i == len(items) - 1 else "├── "
        lines.append(f"{prefix}{connector}{item}")

        if os.path.isdir(full_path):
            extension = "    " if i == len(items) - 1 else "│   "
            lines.extend(list_dir(full_path, prefix + extension))
    return lines

if __name__ == "__main__":
    print("📁 Membuat struktur folder...")
    lines = ["."] + list_dir(".")
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"✅ Struktur tersimpan di {OUTPUT_FILE}")
