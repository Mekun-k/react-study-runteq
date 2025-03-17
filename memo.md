文字だけ書いていっても意味ないから実際にコードを書き始めてから意識する。
このコードはどれに該当するんだろう？と仮説を持ってコードを書き始めること。
ざっくりと目を通しておく。


### **要約**

#### **コンポーネントベースのアーキテクチャ**
コンポーネントはUIの一部分をカプセル化したもので、再利用可能な独立したユニットです。HTMLのように扱え、特定の機能を持つ小さなアプリケーションと考えられます。

#### **コンポーネントの特徴**
- **再利用性**：同じコンポーネントを複数の場所で使用可能。開発時間の短縮やコードの重複を防げる。
- **分離性**：他の部分に影響を与えず、修正や保守が容易。
- **カプセル化**：各コンポーネントは独自の状態（state）と振る舞い（behavior）を持ち、外部から直接変更されないため、再利用性とテスト性が向上。

#### **コンポーネントの種類**
- **関数コンポーネント**：シンプルな構造で、React Hooksを利用することで状態管理が可能。
- **クラスコンポーネント**：より複雑な機能を持ち、state管理やライフサイクルメソッドを使用可能。

#### **コンポーネントの利用**
- HTMLタグのように記述し、他のコンポーネントの内部に組み込める。
- **プロパティ（props）** を通じてデータを渡し、状態やプロパティが変わるとUIが自動更新される。

#### **Reactの主な特徴**
- **宣言的UI**：アプリの状態に応じてUIを適切にレンダリングし、コードの可読性やデバッグのしやすさが向上。
- **仮想DOM**：変更が発生すると差分だけを実際のDOMに適用し、パフォーマンスを向上。
- **JavaScriptとの統合**：JSXを使用することで、HTMLライクな記述が可能。

#### **Reactの利点**
- **コンポーネントの再利用性**：開発効率向上とコード整理に貢献。
- **大規模なコミュニティとエコシステム**：多くの情報やライブラリが利用可能。
- **React Hooks**：`useState` や `useEffect` などを用いることで、よりシンプルで再利用可能なコンポーネントを作成可能。

Reactはコンポーネントを軸に、効率的でメンテナブルな開発を実現するフレームワークです。


### 要約

#### **TypeScriptの特徴とメリット**
TypeScriptはJavaScriptを基にしたプログラミング言語で、型付けを導入することでコードの安全性を向上させています。主な特徴として以下の点が挙げられます。

- **静的型付け**：変数の型を事前に宣言し、エラーを未然に防ぐ。
- **JavaScriptとの互換性**：既存のJavaScriptコードを利用でき、トランスパイルによりJavaScript環境で実行可能。
- **ツールのサポート**：エラー検出、自動補完、リファクタリングの支援があり、開発効率が向上。

#### **TypeScriptの利点**
- **エラーの早期発見**：型付けによりコードの誤りを事前にチェック可能。
- **大規模開発向き**：多人数開発でもコード管理がしやすい。
- **改良されたコード編集体験**：開発環境がエラーを指摘し、スムーズなコーディングが可能。

#### **TypeScriptの基本文法**
- **変数の型注釈**：`const num: number = 123;`
- **型推論**：型を明示しなくてもTypeScriptが自動で推測。
- **関数の型宣言**：引数や戻り値の型を指定可能。
- **型エイリアス**：型に名前をつけて再利用可能（例：`type StrOrNum = string | number;`）。

公式ドキュメントを参考にしながら、より詳細な文法を学習することが推奨されます。

以下のコードにてDOMからIDがtodo_appの要素を取得しcontainer変数に代入している。
const container = document.getElementById("todo_app");

コンポーネントをレンダリングすることができる。
これにより、Todoアプリが指定されたDOM要素内に表示され、マウントすることができる。
root.render(<TodoApp />);

## **🚀 `throw showError()` とは？**
`throw showError()` は、**Nuxt 3 のエラーハンドリングのための関数** で、ページや API で発生したエラーを Nuxt の `error.vue` へ伝えるために使用されます。

💡 `throw createError()` と似ていますが、**`showError()` はクライアント側 (`process.client`) でも使える** ため、CSR（クライアントサイドレンダリング）でもエラーを処理できます。

---

## **✅ `throw showError()` の動作**
例えば、`pages/1.vue` で `API` を叩いて `status: 404` の場合に `throw showError()` を実行すると **`error.vue` に遷移** する。

### **📌 `pages/1.vue`**
```vue
<script setup>
import { useFetch, showError } from "#app";

// APIを取得
const { data, error } = await useFetch("/api/data1");

if (error.value) {
  console.log("APIエラー:", error.value);

  throw showError({
    statusCode: error.value.status || 500,
    statusMessage: error.value.statusText || "エラーが発生しました",
  });
}
</script>

<template>
  <h1>1画面（管理者専用）</h1>
</template>
```

✅ **エラーが発生すると `error.vue` に遷移し、エラー情報を表示できる！**  
✅ **`throw showError()` は `process.client` でも使えるため、CSR（クライアントサイド遷移）でも機能する！**

---

## **✅ `showError()` の使い方**
| **使い方** | **説明** |
|-----------|------------------|
| `showError({ statusCode: 404, statusMessage: 'Not Found' })` | エラーを表示（`error.vue` に遷移） |
| `throw showError({ statusCode: 500, statusMessage: 'Server Error' })` | 例外としてエラーを発生させ、ページの表示を止める |

**🛠 `showError()` を `throw` なしで使うと、エラー情報を表示するだけで `error.vue` に遷移しない！**  
**🛠 `throw showError()` を使うと、`error.vue` に遷移する！**

---

## **✅ `throw createError()` との違い**
| **関数** | **どこで使える？** | **エラーページ (`error.vue`) に遷移？** | **クライアント (`NuxtLink`) でも動く？** |
|---------|------------------|----------------------------------|----------------------------------|
| `throw createError()` | **サーバー (`process.server`)** | ✅ 遷移する | ❌ クライアント (`NuxtLink`) では動かない |
| `throw showError()` | **サーバー (`process.server`) & クライアント (`process.client`)** | ✅ 遷移する | ✅ クライアント (`NuxtLink`) でも動く |

🚀 **`throw showError()` の方が `NuxtLink` のクライアント遷移 (`process.client`) でも動くので便利！**

---

## **✅ まとめ**
### **💡 `throw showError()` とは？**
- **Nuxt のエラーハンドリングのための関数**
- **`error.vue` に遷移する**
- **`process.client`（クライアント側）でも動く**
- **`throw createError()` より柔軟に使える**

---

### **💡 どんなときに `throw showError()` を使う？**
✅ **`NuxtLink` のクライアントサイド遷移でエラーを `error.vue` に適用したいとき**  
✅ **サーバー側 (`API`) だけでなく、クライアント側 (`useFetch`) のエラー処理も一貫させたいとき**  
✅ **クライアント側のエラー処理でも `error.vue` に遷移させたいとき**

---

🚀 **`throw createError()` では `NuxtLink` のクライアント遷移で動作しない場合、`throw showError()` を使うのがベスト！**  
試してみて、動作しない場合は詳細を教えてください！ 😊

createError() vs showError() の超要約！
✅ createError() → SSR（サーバー側）専用。throw createError() しないと error.vue に遷移しない。CSR（クライアント側）では効かないことがある。
✅ showError() → SSR でも CSR でも error.vue に遷移できる！特に NuxtLink の遷移時のエラー処理に強い。
✅ NuxtLink の遷移時に createError() で error.vue に遷移しないなら showError() を使うべし！


**GCS（Google Cloud Storage）とは？**  
Googleが提供する**クラウド上のストレージサービス**で、**画像・動画・JSONなどのデータを保存・管理**できる。  
主な特徴：
- **スケーラブル**（容量無制限で拡張可能）
- **低コスト**（アクセス頻度に応じた料金体系）
- **セキュア**（アクセス制御や暗号化対応）
- **APIで簡単に操作可能**（Laravelや他のアプリと連携しやすい）

主な用途：
✅ **静的ファイル配信（画像・動画）**  
✅ **ログ・バックアップ保存**  
✅ **JSONデータストア（DB代わりの軽量データ管理）**

クラウド上の「外付けハードディスク」みたいなもの！


Nuxt.js でエラーハンドリングを行う際に、`showError` よりも `createError` が好まれる理由はいくつかあります。

---

## **1. `createError` はエラーオブジェクトを作成し、エラーページを表示できる**
`createError` は `useAsyncData` や `useFetch` 内で使用でき、エラーオブジェクトを作成して適切にハンドリングできます。

```ts
import { useFetch, createError } from '#app'

export default defineNuxtComponent({
  async setup() {
    const { data, error } = await useFetch('/api/data')

    if (error.value) {
      throw createError({ statusCode: 500, statusMessage: 'データ取得に失敗しました' })
    }

    return { data }
  }
})
```

**✅ `createError` のメリット**
- `useFetch` / `useAsyncData` で簡単にエラー処理できる
- ステータスコードやメッセージを設定できる
- `throw` で例外として扱える（catch で制御可能）

---

## **2. `showError` はコンポーネントレベルでのエラーページ遷移**
一方で `showError` は主に **レイアウトやページコンポーネント内** で使用し、エラーを即座に表示させます。

```ts
import { showError } from '#app'

export default defineNuxtComponent({
  setup() {
    showError({ statusCode: 404, statusMessage: 'ページが見つかりません' })
  }
})
```

**❌ `showError` のデメリット**
- `useFetch` などの非同期処理では適切に扱えない
- `throw` ではないため、エラーハンドリングしづらい
- API レスポンスのエラーハンドリングには不向き

---

## **3. APIのエラーハンドリングには `createError` が適している**
Nuxt.js の `useFetch` / `useAsyncData` では `createError` を使うことで、API レスポンスのエラーハンドリングを統一的に管理できます。

```ts
const { data, error } = await useFetch('/api/user')

if (error.value) {
  throw createError({ statusCode: 403, statusMessage: 'アクセス権限がありません' })
}
```

`showError` はエラーページへ遷移する用途には便利ですが、API レスポンスのエラー処理には適さないため、**API ハンドリングでは `createError` を使うのがベストプラクティス** です。

---

## **結論**
|  | `createError` | `showError` |
|---|---|---|
| **用途** | APIレスポンスのエラーハンドリング | ページ/レイアウト内でのエラー表示 |
| **適用場所** | `useFetch`, `useAsyncData`, API | ページコンポーネント, レイアウト |
| **エラーの扱い** | `throw` できる | 直接エラーを表示 |
| **エラーページ遷移** | 可能（例外として扱う） | すぐにエラー画面へ遷移 |
| **適用範囲** | API / 非同期処理 | UI エラー |

### **結論**
- **APIエラーや非同期処理のエラーハンドリング → `createError`**
- **画面のエラー表示やエラーページ遷移 → `showError`**

API通信の失敗時は `createError` を使うのが適切で、Nuxt.js の標準的なエラーハンドリングフローと相性が良いです。