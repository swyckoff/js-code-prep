.PHONY: build clean doc test 
.DEFAULT_GOAL := compile

project_name = js-code-prep

init:  ## install requirements
	npm install 

build: ## Compile from typescript
	npm run $@
	
clean:  ## delete files
	@rm -rf build dist

create: ## Duplicate templates for a new neetcode problem to solve
	npm run $@

doc:  ## generate docs
	$(NOOP)

lint:  ## trigger the linter
	@npm run $@

publish:  ## publish a new semantic version
	@npm run $@

version:  ## print the current version
	$(NOOP)

help: ## Display this help screen
	@grep -E '^[-a-z.A-Z_/]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
