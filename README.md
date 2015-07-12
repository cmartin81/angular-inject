# angular-inject
A angular decorator for angular dependency injection.

## Install
    $ npm install --save angular-inject 
 
## Usage
    // ES2016 style
    import {inject} from 'angular-inject'

    // CommonJS style
    let inject = require('angular-inject').inject;


    @inject( ['$base64'] )
    class FooBarController {
        constructor(){
            ....
            ....
            ....
        }
        
        bar() {
            this.$base64.encode('babba');
        }
    }
    

## Note
You need to run babel with the option 'es7.decorators' enabled.