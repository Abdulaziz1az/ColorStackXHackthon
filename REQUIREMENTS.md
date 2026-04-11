## Requirements (System & Project)

This document lists the system requirements, project dependencies, and quick setup instructions for this repository.

### Overview

The repo contains a simple Python script (`hi.py`) in the root and a frontend located under the `Study Help/` folder (a Vite + React project). Use the sections below depending on which part of the project you want to run.

---

## System requirements

- macOS (tested on recent macOS versions)
- Node.js (LTS recommended, e.g., >= 16). Verify with:

```bash
node --version
```

- npm or yarn. Verify with:

```bash
npm --version
# or
yarn --version
```

- Python 3.8+ (if you intend to run `hi.py` or any Python code). Verify with:

```bash
python3 --version
```

---

## Frontend (Study Help) — Node / Vite

The frontend source is in the `Study Help/` directory.

Typical setup and run steps (from repository root):

```bash
# change into the frontend folder
cd "Study Help"

# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

If you prefer yarn:

```bash
yarn
yarn dev
yarn build
```

---

## Python (hi.py)

If you want to run `hi.py` or add Python dependencies, create a virtual environment and use a `requirements.txt` file.

Example (zsh / macOS):

```bash
# create and activate venv
python3 -m venv .venv
source .venv/bin/activate

# install dependencies (if you have a requirements.txt)
pip install -r requirements.txt

# run the script
python hi.py
```

### Creating or updating `requirements.txt`

If you add Python packages to your environment and want to generate a `requirements.txt`:

```bash
# with your virtualenv active
pip freeze > requirements.txt
```

If you only want project imports (and not every pinned transitive dependency) consider using `pipreqs`:

```bash
# install once
pip install pipreqs

# generate requirements based on imports
pipreqs --force .
```

---

## Quick checklist

- [ ] Node (install) — run `node --version`
- [ ] npm or yarn — run `npm --version`
- [ ] Python (if needed) — run `python3 --version`
- [ ] Create/activate Python venv before installing Python deps
- [ ] For the frontend: `cd "Study Help" && npm install && npm run dev`

---

## Notes & next steps

- If you'd like, I can:
  - create a `requirements.txt` file based on current Python environment,
  - add a short `CONTRIBUTING.md` with dependency rules, or
  - update the root `README.md` to include a short requirements/setup section.

If you want any of those, tell me which option and I will apply it.

---

## License / Attribution

Use the repository's existing license (if any). If you need a license added, tell me which one and I will add it.
