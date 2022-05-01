export const Account = class {
  constructor() {
    this.email = ''
    this.countries = []
    this.company = null
  }

  populate(email, countries, company) {
    this.email = email
    this.countries = countries
    this.company = company
  }
}

export const Register = class {
  constructor() {
    this.email = ''
    this.countries = []
    this.company = null
  }

  populate(email, countries, company) {
    this.email = email
    this.countries = countries
    this.company = company
  }
}

export const Profile = class {
  constructor() {
    this.countries = []
    this.company = null
  }

  populate(countries, company) {
    this.countries = countries
    this.company = company
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
