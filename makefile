.PHONY: all

all: clean build-react

clean:
	rm -rf admin/assets

build-react:
	cd admin/react && npm i && npm run build

prepare:
	rm -rf .git .idea .vscode .gitignore admin/react
