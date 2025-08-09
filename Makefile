install:
	npm install

build:
	npm run build

dev:
	npm run dev

publish: build
	git checkout public --
	git rm $$(git ls-files -- ':!.gitignore')
	cp -R out/* ./
	echo "" > .nojekyll
	echo "teacherseimetz.com.br" > CNAME
	git add .
	git commit -m "Rebundle"
	@echo "Ready to push"
