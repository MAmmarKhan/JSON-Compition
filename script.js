var data = [
    {
        "channelId": 210,
        "Dramas": [
            {
                "id": 216862,
                "name": "Qadam Qadam Ishq",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/01/Qadam-Qadam-Ishq.jpg"
            }
        ]
    },
    {
        "channelId": 35,
        "Dramas": [
            {
                "id": 232406,
                "name": "Dil Na Umeed Tou Nahin",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/09/Dil-na-umeed-to-nhi.jpg"
            }
        ]
    },
    {
        "channelId": 28,
        "Dramas": [
            {
                "id": 230603,
                "name": "Chamak Damak",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/Chamak-Damak.jpg"
            }
        ]
    },
    {
        "channelId": 321,
        "Dramas": [
            {
                "id": 142228,
                "name": "Nadaaniyaan",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/09/Nadaaniyaan-1.jpg"
            }
        ]
    },
    {
        "channelId": 4,
        "Dramas": [
            {
                "id": 226383,
                "name": "Muqaddar",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/09/Muqaddar-1.jpg"
            }
        ]
    },
    {
        "channelId": 5,
        "Dramas": [
            {
                "id": 226134,
                "name": "Mera Dil Mera Dushman",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/MAin-agar-chup-hun.jpg"
            }
        ]
    },
    {
        "channelId": 5,
        "Dramas": [
            {
                "id": 231671,
                "name": "Faryaad",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/MAin-agar-chup-hun.jpg"
            }
        ]
    },
    {
        "channelId": 4,
        "Dramas": [
            {
                "id": 231408,
                "name": "Main Agar Chup Hoon",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/MAin-agar-chup-hun.jpg"
            }
        ]
    },
    {
        "channelId": 28,
        "Dramas": [
            {
                "id": 232053,
                "name": "Raqs-e-Bismil",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/01/raqs-e-bismil-300.jpg"
            }
        ]
    },
    {
        "channelId": 3,
        "Dramas": [
            {
                "id": 232806,
                "name": "Ertugrul Ghazi (Season 3)",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/02/1.jpg"
            }
        ]
    },
    {
        "channelId": 4,
        "Dramas": [
            {
                "id": 227180,
                "name": "Meher Posh",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/09/MeharPosh.jpg"
            }
        ]
    },
    {
        "channelId": 4,
        "Dramas": [
            {
                "id": 230958,
                "name": "Fitrat",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/02/1.jpg"
            }
        ]
    },
    {
        "channelId": 433,
        "Dramas": [
            {
                "id": 233517,
                "name": "Tum Sath Nibha Letay Agar",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/05/Tum-Sath-Nibha-Lete-agar-1.jpg"
            }
        ]
    },
    {
        "channelId": 3,
        "Dramas": [
            {
                "id": 176508,
                "name": "Bechari",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/Bechari300.jpg"
            }
        ]
    },
    {
        "channelId": 31,
        "Dramas": [
            {
                "id": 229956,
                "name": "Ajnabi Lage Zindagi",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/AjnabiLageZindagi300.jpg"
            }
        ]
    },
    {
        "channelId": 35,
        "Dramas": [
            {
                "id": 225982,
                "name": "Muhabbat Khel Tamasha",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/09/MuhabbatKhelTamasha.jpg"
            }
        ]
    },
    {
        "channelId": 433,
        "Dramas": [
            {
                "id": 219568,
                "name": "Ishq Zaat",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/IshqZaat300.jpg"
            }
        ]
    },
    {
        "channelId": 284,
        "Dramas": [
            {
                "id": 214456,
                "name": "Ishq Bepanah",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/IshqBepanah300.jpg"
            }
        ]
    },
    {
        "channelId": 304,
        "Dramas": [
            {
                "id": 233422,
                "name": "Charagar",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/08/Charagr.jpg"
            }
        ]
    },
    {
        "channelId": 310,
        "Dramas": [
            {
                "id": 231567,
                "name": "Shajar-e-Mamnu",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2020/12/Shajre-Mamnoo300.jpg"
            }
        ]
    },
    {
        "channelId": 321,
        "Dramas": [
            {
                "id": 223676,
                "name": "Hidat",
                "thumbnail": "https://paktvdramas.pk/wp-content/uploads/2021/08/11.jpg"
            }
        ]
    }
]

var result = "";
data.map((value,key) =>{
    result += value.channelId + "<br>";
})

var output = document.getElementById('output');
output.innerHTML = result