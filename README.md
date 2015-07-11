# angular-inject
A angular decorator for angular dependency injection.
 
## Usage

    import {inject} from 'angular-inject'


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