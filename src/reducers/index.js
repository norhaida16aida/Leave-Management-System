import {combineReducers} from 'redux'

const getGeneralInfo = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_GENERAL_LOGIN_INFO':
            return 'save general login info';
        default:
            return 'no data saved.'
    }
}

const getAdminInfo = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_ADMIN_LOGIN_INFO':
            return 'save admin login info'
        default:
            return 'no data saved.'
    }
}

export default combineReducers({
    userInfo: getGeneralInfo,
    adminIfo: getAdminInfo
});