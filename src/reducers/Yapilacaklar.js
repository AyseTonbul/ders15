export const varsayilanListe = [
    {
        id: 1,
        title: "Süt alınacak",
        complete: false,
    },
    {
        id: 2,
        title: "Yumurta alınacak",
        complete: false,
    },
];

export function islemFonksiyonu(state, islemBilgisi) {
    switch (islemBilgisi.type) {
        case "COMPLETE":
            return state.map((yapilacakIs) => {
                if (yapilacakIs.id === islemBilgisi.id) {
                    return { ...yapilacakIs, complete: !yapilacakIs.complete };
                } else {
                    return yapilacakIs;
                }
            });
        case "EKLE":
            const yeniIs = { id: new Date().getTime(), title: islemBilgisi.baslik, complete: false }
            return [ ...state, yeniIs ]

        case "SIL":
            return state.filter( (yapilacakIs)=>{
                if (yapilacakIs.complete === true) {
                    return yapilacakIs.id !== islemBilgisi.id
                } else 
                    return true
            } )

        default:
            return state;
    }
};