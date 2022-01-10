/*
 * @Author       : Zero
 * @Date         : 2022-01-10 12:33:37
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 15:40:18
 * @FilePath     : /try_web_vue2/src/store/mainForm.js
 */

function showError(input, message) {
    input.classType = 'error';
    input.small = message;
}

function showSuccess(input) {
    input.classType = 'success';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${input.name} is not valid`);
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.name} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${input.name} mest be less than ${man} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

export default {
    namespaced: true,
    actions: {
        submit(context) {
            const state = context.state;
            context.dispatch('checkRequired', state.inputArr);
            let input1;
            if (!state.isRequired) {
                state.inputArr.forEach(input => {
                    switch (input.id) {
                        case 'username':
                            checkLength(input, 3, 15);
                            break;
                        case 'email':
                            checkEmail(input);
                            break;
                        case 'password':
                            checkLength(input, 6, 25);
                            input1 = input;
                            break;
                        case 'password2':
                            checkPasswordsMatch(input1, input);
                            break;
                        default:
                            break;
                    }
                });
            }
        },
        checkRequired(context, inputArr) {
            let isReq = false;
            inputArr.forEach(input => {
                if (input.required) {
                    if (input.value.trim() === '') {
                        isReq = true;
                        showError(input, `${input.name} is required`);
                    } else {
                        showSuccess(input);
                    }
                }
            });
            context.commit('checkRequiredM', isReq);
        },
    },
    mutations: {
        checkRequiredM(state, value) {
            state.isRequired = value;
        },
        setValue(state, value) {
            state.inputArr[value.index].value = value.text;
        },
    },
    state: {
        isRequired: false,
        inputArr: [{
                name: 'Username',
                id: 'username',
                type: 'text',
                placeholder: 'Enter username',
                autocomplete: 'off',
                value: '',
                required: true,
                classType: '',
                small: 'Error message',
            },
            {
                name: 'Email',
                id: 'email',
                type: 'text',
                placeholder: 'Enter email',
                autocomplete: 'off',
                value: '',
                required: true,
                classType: '',
                small: 'Error message',
            },
            {
                name: 'Password',
                id: 'password',
                type: 'password',
                placeholder: 'Enter password',
                autocomplete: 'new-password',
                value: '',
                required: true,
                classType: '',
                small: 'Error message',
            },
            {
                name: 'Confirm Password',
                id: 'password2',
                type: 'password',
                placeholder: 'Enter password again',
                autocomplete: 'new-password',
                value: '',
                required: true,
                classType: '',
                small: 'Error message',
            },
        ],
    },
    getters: {

    },
}