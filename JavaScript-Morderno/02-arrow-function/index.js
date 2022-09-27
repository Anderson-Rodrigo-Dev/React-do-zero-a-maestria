const user  = {
    name: 'Anderson',
    sayUserName() {
        var self = this
        setTimeout(function(){
            console.log('Username: '+ self.name)
        }, 500)
    },
    arrowSayUserName() {
        setTimeout(() => {
            console.log('Username: '+ this.name)
        })
    }
}

user.sayUserName()

user.arrowSayUserName()