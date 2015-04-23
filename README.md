# Dokodemodoor

![新規投稿_-_FICC___Qiita_Team.png](https://qiita-image-store.s3.amazonaws.com/2096/168/471c8126-41a6-72f7-db87-8fbcd65356e9.png)

[Heavensdoor](https://www.ficc.jp/blog/ficc-heavensdoor)、とても便利に見させてもらっています。Heavensdoorができてから、心なしかスムーズにトイレに入れるようになった気がします。ありがとうございます。

ただHeavensdoorのページを席で見ると、隣の方などから「こいつこれからトイレか」「トイレだ…」みたいに思われるような気がして少し恥ずかしくなってしまいます。(小並感)

ということで、Heavensdoorの開閉の様子をひっそりと監視できるようにするため、「Dokodemodoor」というChrome Extensionを作りました。

## インストール方法

![shimbaco_dokodemodoor.png](https://qiita-image-store.s3.amazonaws.com/2096/168/5ee5ac0f-437b-141f-df92-727684ab36ef.png)
↑ ZIPファイルをダウンロードして…

![スクリーンショット_4_21_15__11_32_PM.png](https://qiita-image-store.s3.amazonaws.com/2096/168/08ed65d0-8bcb-a135-9c01-80edee98d150.png)
↑ ZIPファイルの中に入っている「dokodemodoor.crx」というファイルをChromeの「拡張機能」のページにドラッグアンドドロップするとインストールできます。

インストールすると、この文書の最初の画像のようにアイコンが表示されます。Heavensdoorが閉まっているときは「どこでもドア」が閉まっていて、開いているときは全てを出し切って笑顔になっているドラえもんが表示されるという寸法です。

![dora.jpg](https://qiita-image-store.s3.amazonaws.com/2096/168/51dab18a-1f51-56f6-d59b-b629b2a32c62.jpeg)
(ドラえもんをそのまま出すとまずい気がしたので、モザイク処理を施しています)

ただ残念なことに、アイコン作成能力が無いので、ぱっと見何がなんだかわからない状態になっています…。[良い感じのアイコンをPull Requestしてくれる方を募集しています](https://github.com/shimbaco/dokodemodoor/pulls)。

## どうやって作ったか

[Heavensdoor](http://ficc-heavensdoor.herokuapp.com/)のページでデベロッパーツールを開いてコンソールを眺めると、福岡さんが開発中に書かれたと思われるデバッグ用のログを見ることができます。
このログに書かれているメッセージを[クライアントサイドで動いているJSのコード](http://ficc-heavensdoor.herokuapp.com/bundle.js)の中で検索し、[Socket.IO](http://socket.io/)で使用しているイベント名を確認、Extensionの中でSocket.IOのクライアントライブラリを読み込み、イベントを受け取る処理を書いた、という感じです。ハックしてる感があってとても楽しかったです。

もし良かったらご利用下さい。m(__)m
