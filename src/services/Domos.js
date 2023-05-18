export class Domos {
  static domos = [

    { 
      "id": 1,
      "name": "Domo Aurora Austral",
      "description": "Diseñado para ofrecer a los huéspedes la oportunidad de experimentar la belleza de las auroras australes en un entorno único. Este domo cuenta con una arquitectura innovadora y una decoración acogedora que garantizan una experiencia inolvidable.",
      "price": "80000",
      "image": require('../assets/auroraaustral.jpg'),
    },
    {
      "id": 2,    
      "name": "Domo Tierra Magica",
      "description": "Rodeado de impresionantes paisajes naturales y construido con materiales sostenibles como la tierra y la madera. Ofrece una experiencia única y acogedora para los huéspedes que buscan estar en contacto con la naturaleza.",
      "price": "60000",
      "image": require('../assets/tierramagicaa.jpg'),
    },
    {
      "id": 3,        
      "name": "Domo Valle del Murta",
      "description": "Rodeado de un paisaje natural impresionante que ofrece a los huéspedes una experiencia única en la Patagonia. Este domo cuenta con una arquitectura moderna y una decoración acogedora que asegura una estancia cómoda y relajante en contacto con la naturaleza.",
      "price": "40000",
      "image": require('../assets/vallemurta.jpg'),
    },     
  ];
  
  static getAllDomos() {
    return this.domos;
  }
}