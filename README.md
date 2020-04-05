# reduce TTFB

## Usage

```
yarn start
```

## TTFB(Time to first byte)対策

* TTFB: <https://web.dev/time-to-first-byte/>

MiddlewareでHTMLレスポンスを`res.write`を利用して送出できるところから、送っていく戦略を取る。

最も単純な例は、`<!DOCTYPE html>`を真っ先に送ることである。

```html
<!-- 1. ここから他のMiddlewareに依存しないレスポンス -->
<!DOCTYPE html>
<!-- 1. ここまで他のMiddlewareに依存しないレスポンス -->
<!-- 2. ここからmiddlewareの処理に応じて変化する部分 -->
<html lang="ja">
  <head>
  </head>
<body>

</body>
</html>
<!-- 2. ここまでmiddlewareの処理に応じて変化する部分 -->
```

## Streamと動機処理の比較

* <http://localhost:9000/slow/sync>
* <http://localhost:9000/slow/stream>


