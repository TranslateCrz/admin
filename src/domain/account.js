export const Account = class {
  constructor() {
    this.email = ''
    this.countries = []
    this.company = null
  }

  populate(account) {
    this.email = account.email
    this.countries = account.countries
    this.company = account.company
  }
}

export const Register = class {
  constructor() {
    this.email = ''
    this.countries = []
    this.company = null
  }

  populate(account) {
    this.email = account.email
    this.countries = account.countries
    this.company = account.company
  }
}

export const Profile = class {
  constructor() {
    this.countries = []
    this.company = null
  }

  populate(account) {
    this.countries = account.countries
    this.company = account.company
  }
}

export const Login = class {
  constructor() {
    this.email = ''
  }

  populate(email) {
    this.email = email
  }
}
