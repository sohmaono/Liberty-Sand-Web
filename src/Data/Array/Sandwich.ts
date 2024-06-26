import MainMenuType from "../Type/MainMenu";

const sandwichMainMenuArray: MainMenuType[] = [
  {
    title: "定番のサンドイッチ！",
    subtitle: "トッピングを選択できます",
    menus: [
      {
        title: "Liberty Club House Sandwich",
        titleJP: "リバティ クラブハウスサンド",
        description:
          "スモークチキンにベーコントマトレタスチェダーチーズをライ麦パン3枚で挟んだ 高さ最大級のボリュームミーサンド",
        price: 1512,
        priceWithoutTax: 1400,
        type: 0,
        picture: "リバティクラブハウスサンド",
        showPicture: true,
      },
    ],
  },
  {
    title: "BEEF/TURKEY HAM SAND",
    subtitle: "NYのデリで定番のコーンドビーフやターキーハムのサンド",
    menus: [
      {
        title: "Turkey Reuben Sandwich",
        titleJP: "ターキールーベンサンド",
        description:
          "ペッパーの効いたパストラミターキーハムとザワークラウトチェダーチーズを挟んだライ麦パンのサンド",
        price: 1512,
        priceWithoutTax: 1400,
        type: 1,
        picture: "ターキールーベンサンド",
        showPicture: true,
      },
      {
        title: "NY Reuben Sandwich",
        titleJP: "NYルーベンサンド",
        description:
          "コーンドビーフ(塩漬け牛肉)をザワークラウトとチェダーチーズを挟んだライ麦パンのサンド",
        price: 1800,
        priceWithoutTax: 1728,
        type: 1,
        picture: "ターキールーベンサンド",
        showPicture: false,
      },
      {
        title: "Turkey Club House Sandwich",
        titleJP: "ターキークラブハウスサンド",
        description:
          "パストラミターキーハムとアボカド トマト レタスチーズを挟んだ黒糖パンのサンド 見た目も鮮やかでフォトジェニック No.1!",
        price: 1620,
        priceWithoutTax: 1500,
        type: 1,
        picture: "ターキークラブハウスサンド",
        showPicture: true,
      },
      {
        title: "Smoked Turkey Ham Sandwich",
        titleJP: "スモークドターキーハムサンド",
        description:
          "しっとりと味わい深いターキーのハムにチーズ トマト レタスを挟んだ黒糖パンのサンド ターキーのおいしさをご堪能ください",
        price: 1458,
        priceWithoutTax: 1350,
        type: 1,
        picture: "スモークドターキーハムサンド",
        showPicture: true,
      },
    ],
  },
  {
    title: "HARD SAND",
    subtitle: "やわらかめのバケットを使用した パリッと香ばしいサンド",
    menus: [
      {
        title: "Philly Cheese Steak",
        titleJP: "フィリーチーズステーキ サンド",
        description:
          "フィラデルフィア発祥アメリカ東海岸の味。薄切りの牛肉と玉ねぎを甘辛く炒め テェダーチーズを焼いたサンド",
        price: 1080,
        priceWithoutTax: 1000,
        type: 1,
        picture: "フィリーチーズステーキサンド",
        showPicture: true,
      },
      {
        title: "Philly Double Cheese Steak",
        titleJP: "フィリーWチーズステーキ サンド",
        description:
          "薄切りの牛肉にWチーズでたっぷり 豪快にかぶりついてどうぞ！",
        price: 1296,
        priceWithoutTax: 1200,
        type: 1,
        picture: "フィリーチーズステーキサンド",
        showPicture: false,
      },
      {
        title: "Carrot Rappe Sandwich",
        titleJP: "キャロットラペサンド",
        description:
          "オレンジ果汁とレーズンがニンジンの甘味引き立つお店で手作りのにんじんサラダをたっぷりサンド",
        price: 864,
        priceWithoutTax: 800,
        type: 1,
        picture: "キャロットラペサンド",
        showPicture: true,
      },
      {
        title: "Ham Cheese Sandwich",
        titleJP: "ハムチーズサンド",
        description:
          "薄切りのポークハムを重ね モザレラチーズを挟んだシンプルなおいしさのサンド",
        price: 972,
        priceWithoutTax: 900,
        type: 1,
        picture: "ハムチーズサンド",
        showPicture: true,
      },
    ],
  },
  {
    title: "BACON/CHEESE/VEGE SAND",
    subtitle: "定番サンドイッチの具材を リバティサンド風に美味しくサンド",
    menus: [
      {
        title: "B.L.T Cheese",
        titleJP: "BLT チーズサンド",
        description:
          "ベーコン レタス トマト チーズを挟んだキャロットパンのサンド",
        price: 1512,
        priceWithoutTax: 1400,
        type: 1,
        picture: "BLTチーズサンド",
        showPicture: true,
      },
      {
        title: "B.L.T",
        titleJP: "ビーエルティサンド",
        description:
          "ベーコン レタス トマトを ほんのりオレンジ色のキャロットパンに挟んだサンド",
        price: 1404,
        priceWithoutTax: 1300,
        type: 1,
        picture: "BLTチーズサンド",
        showPicture: false,
      },
      {
        title: "B.L.T Avocado",
        titleJP: "BLT アボカドサンド",
        description:
          "ベーコン レタス トマト アボカドを挟んだキャロットパンのサンド",
        price: 1566,
        priceWithoutTax: 1450,
        type: 1,
        picture: "BLTチーズサンド",
        showPicture: false,
      },
      {
        title: "B.L.T Avocado Cheese",
        titleJP: "BLT アボカドチーズサンド",
        description:
          "ベーコン　レタス　トマト　チーズ　アボカドを挟んだキャロットパンのサンド",
        price: 1728,
        priceWithoutTax: 1600,
        type: 1,
        picture: "BLTチーズサンド",
        showPicture: false,
      },
      {
        title: "Cheese Sandwich",
        titleJP: "チーズ　サンド",
        description:
          "流れ出る滝のようなたっぷり3種のチーズとサクサクに焼き上げた香ばしいライ麦パンのサンド　熱々のうちにどうぞ！",
        price: 1134,
        priceWithoutTax: 1050,
        type: 1,
        picture: "チーズサンド",
        showPicture: true,
      },
      {
        title: "Chili Cheese Sandwich",
        titleJP: "チリチーズ　サンド",
        description: "スパイシーな自家製チリソースとチーズライ麦パンのサンド",
        price: 1350,
        priceWithoutTax: 1250,
        type: 1,
        picture: "チーズサンド",
        showPicture: false,
      },
      {
        title: "Bacon Cheese Sandwich",
        titleJP: "ベーコンチーズ　サンド",
        description: "人気のチーズサンドにベーコンを挟んだサンド",
        price: 1350,
        priceWithoutTax: 1250,
        type: 1,
        picture: "チーズサンド",
        showPicture: false,
      },
      {
        title: "Veggie Sandwich",
        titleJP: "ベジ　サンド",
        description:
          "アボカド　レタス　トマト　パプリカ　紫キャベツなどの彩り野菜とモザレラチーズをキャロットパンで挟んだたっぷり野菜のサンド",
        price: 1134,
        priceWithoutTax: 1050,
        type: 1,
        picture: "ベジサンド",
        showPicture: true,
      },
    ],
  },
];

export default sandwichMainMenuArray;
