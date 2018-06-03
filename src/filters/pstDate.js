import moment from 'moment'

const date = value => !value ? '' : moment(value).format('MM/DD/YYYY HH:mm:ss')

export default date