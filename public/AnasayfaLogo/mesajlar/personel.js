import Image32 from "../Image32.jpeg";
import Image33 from "../Image33.jpeg";
import Image34 from"../Image34.jpeg";
import Image35 from "../Image35.jpeg";
import Image36 from "../Image36.jpeg";

export const personalList = [
    {
        name: "Candan",
        surname: "Akay",
        message: "Çok güzel değil mi?",
        image: Image32,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Selin",
        surname: "Genç",
        message: "Bir sonraki ne olacak, soru?",
        image: Image33,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Ahu",
        surname: "Tuğ",
        message: "Gerçekten harikasın",
        image: Image34,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Ahde",
        surname: "Vefa",
        message: "Özledim seni canım",
        image: Image35,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Atiye",
        surname: "Tike",
        message: "Bir baksan keşke,Ah!",
        image: Image36,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
];