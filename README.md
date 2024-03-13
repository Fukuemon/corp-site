## 開発環境

### Dependencies

| name        | description                     |
| ----------- | ------------------------------- |
| TypeScript  | -                               |
| Next.js     | ApRouter 使用                   |
| TailwindCSS | -                               |
| ESLint      | 静的解析                        |
| Prettier    | コード整形                      |
| Husky       | Git フックの設定                |
| clsx        | 動的なクラスの使い分けなど      |
| Storybook   | UI コンポーネントのテスト・管理 |

### npm scripts

| name       | action                  | command                      |
| ---------- | ----------------------- | ---------------------------- |
| dev        | 開発モード実行          | next dev                     |
| build      | ビルド                  | next build                   |
| start      | 本番モードの起動        | next start                   |
| lint       | コードチェック          | next lint —dir src/app       |
| lint:fix   | コード精鋭              | next lint —fix —dir src/app  |
| format     | フォーマット実行        | prettier --write             |
| markuplint | HTML(JSX)の構文チェック | markuplint \"./\*_/_.tsx\"", |

# Ts・Lint・Format・Commit ルール

## tsconfig

| properties                         | description                                                                     | true/false |
| ---------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| "allowJs"                          | js/jsx ファイルをコンパイルする                                                 | false      |
| "forceConsistentCasingInFileNames" | ファイルの大文字小文字の区別                                                    | true       |
| "noImplicitReturns"                | 戻り値が void 以外の関数において、すべての条件分岐で戻り値を返すよう強制する    | true       |
| "noUncheckedIndexedAccess"         | インデックス型のプロパティや配列要素を参照したとき undefined のチェックを必須に | true       |

## ESLint

TailwindCSS の Linter：プロパティの自動整形
import/order：import 文の自動整形
unused-imports：不要な import 文の削除
react/jsx-sort-props：propsの自動ソート

## Prettier

- 行の最大幅は 120 文字
- JSX 式は新しい行に
- インデントは 2 スペース
- 配列などの末尾のカンマは削除
- 文末のセミコロンは削除
- クォーテーションはシングルクォーテーションを使用

## commit メッセージ制約

```
<gitmoji><Prefix>：<内容><#issue番号>
```

### gitmoji と prefix の種類

| 絵文字 | prefix   | 内容                                                 |
| ------ | -------- | ---------------------------------------------------- |
| ✨     | feat     | 新機能の実装                                         |
| ⚡️    | perf     | パフォーマンスの改善                                 |
| 🔥     | fire     | 機能・ファイルの削除                                 |
| 🐛     | fix      | バグの修正                                           |
| 🩹     | typo     | ちょっとした修正(小さなミス・誤字など)               |
| 📝     | docs     | コードと関係ない部分(Readme・コメントなど)           |
| 💄     | style    | スタイル関係のファイル(CSS・UI のみの変更など）      |
| ♻️     | refactor | コードのリファクタリング                             |
| 🎨     | art      | コードのフォーマットを整える(自動整形されたのも含む) |
| 🔧     | config   | 設定ファイルの追加・更新(linter など)                |
| ✅     | test     | テストファイル関連(追加・更新など)                   |
| 🚚     | move     | ファイルやディレクトリの移動                         |
| 🎉     | start    | プロジェクトの開始                                   |
| 🚀     | deploy   | デプロイする                                         |

## ブランチルール

Git flowを参考に、以下のルールで行う</br>
流れとしては

1. issueを立てる
2. issueに紐づくfeatureブランチを作成する
3. PRを作成する
4. developブランチにmergeする

### main

本番環境のブランチ

### develop

featureブランチの変更を反映しmergeして動作の確認を行う。

```
develop/{version}
```

例：最初のバージョンのリリース

```
develop/1.0
```

### feature

developブランチから派生させる  
全ての開発はこのブランチで行う。  
基本的に新機能の場合はfeature/{#issue番号}

##### (カテゴリ)

| name        | description                    |
| ----------- | ------------------------------ |
| environment | 環境構築・設定周りの作業       |
| refactoring | コードのリファクタリングを行う |
| improvement | 実装済みの機能改善を行う       |

新機能開発の場合

```
feature/#<issue番号>
```

例：issue：全体のレイアウト構成の作成 #2

```
feature/#2
```

カテゴリを含む場合

```
feature/<category>/#<issue番号>
```

例：issue：環境構築 #1

```
feature/environment/#1
```

### release

(TBD)  
developからmergeする  
mainブランチにmergeする前に確認する作業を行う

### hotfix

(TBD)  
mainブランチから派生する  
リリース後に起きた緊急のバグ対応を行う
