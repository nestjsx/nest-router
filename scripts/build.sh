#!/bin/bash
# A basic script to build and compile the typescript files using tsc

# Set an error handler
trap onExit EXIT

# printing the simple stack trace
onExit() {
    while caller $((n++));
    do :;
    done;
}

build() {
    echo 'Start building..'
    # Run tsc
    tsc
    echo 'tsc exist with status code:' $?
    echo 'Copying Other files..'
    cp -rf package.json lib
    cp -rf README.md lib
    echo 'Done.'
    echo '--------'
}

move() {
    echo 'Copying files to examples/**/node_modules ..'
    for d in examples/*; do
        if [ -d "$d" ]; then
            dist="$d"/node_modules/nest-router
            echo 'Start copying to' "$dist"
            mkdir -p "$dist" && cp -rf lib/* "$dist"
        fi
    done
    echo 'Done.'
    echo '--------'
}

build

if [ "$1" = "andMove" ]; then
    move
fi