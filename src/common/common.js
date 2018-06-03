class CommonService {
    static getRanNumber() {
        return (Math.ceil(Math.random() * 10000000 + 10000000)).toString()
    }
}

export default CommonService