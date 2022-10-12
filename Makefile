install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

update:
	npm link

lint:
	npx eslint
