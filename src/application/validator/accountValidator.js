export const accountValidator = {
  validate: function (account) {
    const error = {}
    if (!this.validateEmail(account.email)) {
      error.email = 'This email is invalid'
    }
    if (!this.validateCountries(account.countries)) {
      error.countries = 'You need at least one country'
    }
    return error
  },
  validateEmail: function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  },
  validateCountries: function (countries) {
    return countries.length > 0
  },
}
