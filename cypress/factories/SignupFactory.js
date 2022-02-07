var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function() {

    var firstName = faker.name.firstName()

    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '85998718229',
      address: {
        postalcode: '60812230',
        street: 'Rua Roberto Silva',
        number: '345',
        datails: 'Casa',
        district: 'Edson Queiroz',
        city_state: 'Fortaleza/CE'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}