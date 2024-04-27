import MainMenuType from "../Type/MainMenu";

const sideMenuMainMenuArray: MainMenuType[] = [
  {
    title: null,
    subtitle: null,
    menus: [
      {
        title: "French Fries (wedges)",
        titleJP: "フライドポテト",
        description: "皮付きのフライドボテト!たくさん食べたいときにどうぞ!",
        price: 594,
        priceWithoutTax: 550,
        type: 3,
        picture: "フライドポテト",
        showPicture: true,
      },
      {
        title: "Cheese Fries",
        titleJP: "チーズポテト",
        description:
          "皮付きのポテトに3種のチーズをかけてトロトロに焼いたメニュー",
        price: 810,
        priceWithoutTax: 750,
        type: 3,
        picture: "フライドポテト",
        showPicture: false,
      },
      {
        title: "Chili Beans Fries",
        titleJP: "チリポテト",
        description:
          "ひき肉とピーンズ入りの自家製チリソースをのせたスパイシーポテト",
        price: 864,
        priceWithoutTax: 800,
        type: 3,
        picture: "チリポテト",
        showPicture: true,
      },
      {
        title: "Onion Rings",
        titleJP: "オニオンリング",
        description: "サクサク食感のオニオンリング バーベキューソースを添えて",
        price: 594,
        priceWithoutTax: 550,
        type: 3,
        picture: null,
        showPicture: false,
      },
      {
        title: "Triangle Nuggets",
        titleJP: "トライアングル ナゲット",
        description:
          "三角形の大きめなチキンナゲット、バーガーやビールとご一緒に!",
        price: 594,
        priceWithoutTax: 550,
        type: 3,
        picture: null,
        showPicture: false,
      },
    ],
  },
];

export default sideMenuMainMenuArray;
