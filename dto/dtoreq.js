class DtoRequest {
  constructor({name, email, age, city, zipcode}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.city = city;
    this.zipcode = zipcode;
  }
}

export { DtoRequest };
