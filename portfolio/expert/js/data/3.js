export const QUESTIONS = [{
        name: 'Bronze Selection',
        nameText: '<br>bronze selection',
        image: '1',
        image2: '1',
        text: 'Ароматические ноты:<br>Какао',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус',
    },
    {
        name: 'Amber Selection',
        nameText: '<br>amber selection',
        image: '2',
        image2: '3',
        text: 'Ароматические ноты:<br>Ореховые',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Slate Selection',
        nameText: '<br>slate selection',
        image: '3',
        image2: '4',
        text: 'Ароматические ноты:<br>Лёгкий цитрус',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Gold Selection',
        nameText: '<br>gold selection',
        image: '4',
        image2: '5',
        text: 'Ароматические ноты:<br>Лёгкая свежесть',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Ruby Fuse',
        nameText: '<br>ruby fuse',
        image: '5',
        image2: '6',
        text: 'Ароматические ноты:<br>Красные ягоды',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Amarelo Fuse',
        nameText: '<br>amarelo fuse',
        image: '6',
        image2: '7',
        text: 'Ароматические ноты:<br>Цитрусовые',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Satin Fuse',
        nameText: '<br>satin fuse',
        image: '7',
        image2: '8',
        text: 'Ароматические ноты:<br>Тропические фруктовые',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Turquoise Selection',
        nameText: '<br>turquoise selection',
        image: '8',
        image2: '9',
        text: 'Ароматические ноты: <br>Свежие',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Green Zing',
        nameText: '<br>green zing',
        image: '9',
        image2: '11',
        text: 'Ароматические ноты: <br>Цитрусовые',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Purple Wave',
        nameText: '<br>purple wave',
        image: '10',
        image2: '12',
        text: 'Ароматические ноты: <br>Ягодные',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Summer Breeze',
        nameText: '<br>summer breeze',
        image: '11',
        image2: '13',
        text: 'Ароматические ноты: <br>Тёплые фруктовые ',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Creations Apricity',
        nameText: 'creations<br> apricity',
        image: '12',
        image2: '15',
        text: 'Ароматические ноты: <br>Тёплые фруктовые',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    },
    {
        name: 'Creations Yugen',
        nameText: 'creations<br> yugen',
        image: '13',
        image2: '17',
        text: 'Ароматические ноты:<br>Свежие цветочные',
        text2: 'Часть совершеннолетних пользователей, которым нравятся те же вкусы, что и Вам, также дополнительно выбирают этот вкус'
    }

]


export const QUESTIONSMAPPING = [
    {
        name: 'Bronze Selection',
        list: [
            'Amber Selection',
            'Ruby Fuse',
            'Creations Apricity',
        ]
    },

    {
        name: 'Amber Selection',
        list: [
            'Bronze Selection',
            'Ruby Fuse',
            'Creations Apricity',
        ]
    },

    {
        name: 'Slate Selection',
        list: [
            'Gold Selection',
            'Creations Apricity',
            'Ruby Fuse',
        ]
    },

    {
        name: 'Gold Selection',
        list: [
            'Ruby Fuse',
            'Slate Selection',
            'Bronze Selection',
        ]
    },

    {
        name: 'Ruby Fuse',
        list: [
            'Creations Apricity',
            'Slate Selection',
            'Satin Fuse',
        ]
    },
    {
        name: 'Satin Fuse',
        list: [
            'Ruby Fuse',
            'Amber Selection',
            'Slate Selection',
        ]
    },

    {
        name: 'Amarelo Fuse',
        list: [
            'Slate Selection',
            'Satin Fuse',
            'Ruby Fuse',
        ]
    },

    {
        name: 'Turquoise Selection',
        list: [
            'Creations Yugen',
            'Summer Breeze',
            'Green Zing',
        ]
    },

    {
        name: 'Green Zing',
        list: [
            'Turquoise Selection',
            'Creations Yugen',
            'Summer Breeze',
        ]
    },
    {
        name: 'Purple Wave',
        list: [
            'Green Zing',
            'Summer Breeze',
            'Creations Yugen',
        ]
    },
    {
        name: 'Summer Breeze',
        list: [
            'Turquoise Selection',
            'Purple Wave',
            'Green Zing',

        ]
    },
    {
        name: 'Teak Selection',
        list: [
            'Bronze Selection',
            'Amber Selection',
            'Slate Selection',
        ]
    },
    {
        name: 'Tropical Swift',
        list: [
            'Purple Wave',
            'Green Zing',
            'Summer Breeze',

        ]
    },

    {
        name: 'Creations Apricity',
        list: [
            'Amber Selection',
            'Bronze Selection',
            'Creations Yugen',
        ]
    },

    {
        name: 'Creations Yugen',
        list: [
            'Purple Wave',
            'Green Zing',
            'Creations Apricity',
        ]
    },

    {
        name: 'Creations Glaze',
        list: [
            'Creations Yugen',
            'Purple Wave',
            'Turquoise Selection',
        ]
    },

    {
        name: 'Creations Noor',
        list: [
            'Creations Apricity',
            'Amber Selection',
            'Bronze Selection',
        ]
    },

]