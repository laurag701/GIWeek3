function myInfo() {
    function myInfo2() {
        let pii = {
            name: 'Laura',
            ssn: 122-22-2222,
            getName() {
                return this.name;
            }

        }
        return pii.getName()
    }
    return myInfo2()
}
console.log(myInfo());
