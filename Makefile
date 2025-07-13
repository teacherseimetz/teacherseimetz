build:
	npm run build

develop:
	num run develop

publish: build
	git checkout public
	git rm $$(git ls-files -- ':!.gitignore')
	cp -R out/* ./
	git add .
	@echo "Ready to commit and push"
