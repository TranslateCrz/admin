export const Account = class {
  email = ''
  countries = []
  company = null

  populate(email, countries, company) {
    this.email = email
    this.countries = countries
    this.company = company
  }
}

export const Register = class {
  email = ''
  countries = []
  company = null

  populate(email, countries, company) {
    this.email = email
    this.countries = countries
    this.company = company
  }
}

export const Profile = class {
  countries = []
  company = null

  populate(countries, company) {
    this.countries = countries
    this.company = company
  }
}

export const Login = class {
  email = ''

  populate(email) {
    this.email = email
  }
}
