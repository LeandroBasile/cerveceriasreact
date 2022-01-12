import lupulo from "../imgnavegador/lupulo.png";
import irish from "../imgnavegador/irishred-min.png"
import dorada from "../imgnavegador/dorada-min.png"
import doradaPampeana from "../imgnavegador/doradapampeana1-min.png"
import stout from "../imgnavegador/stout-min.png"
import apa from "../imgnavegador/apa-min.png"
import ipa from "../imgnavegador/ipa.png"


const cervezas = [
  { id: '1', title: "Irish", description: "1L", prise: "$200", foto: irish, categoria:"roja" },
  { id: '2', title: "Dorada", description: "1L", prise: "$200", foto: dorada , categoria: "rubia" },
  { id: '3', title: "Dorada P", description: "1L", prise: "$200", foto: doradaPampeana , categoria: "rubia" },
  { id: '4', title: "Stout", description: "1L", prise: "$200", foto: stout, categoria:"negra" },
  { id: '5', title: "Apa", description: "1L", prise: "$200", foto: apa , categoria: "roja" },
  { id: '6', title: "Ipa", description: "1L", prise: "$200", foto: ipa , categoria: "rubia" },
];

export const pizarron = new Promise((resolve, reject) => {
  let condicion = true;

  if (condicion) {
    setTimeout(() => {
      resolve(cervezas);
    }, 2000);
  } else {
    reject("error");
  }
});
