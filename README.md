# Import wasm-vips from CDN

## What problem it solves

[CDN-hosted browser files](https://github.com/kleisauke/wasm-vips/issues/12)

## Install

No installation is required.

## Example

### Browser

```html
<script type="module">
    import Vips from 'https://unpkg.com/wasm-vips-cdn@0.0.16/lib/vips.min.js'
    // or
    // import Vips from 'https://cdn.jsdelivr.net/npm/wasm-vips-cdn@0.0.16/lib/vips.min.js'
    // or
    // const { default: Vips } = await import('https://unpkg.com/wasm-vips-cdn@0.0.16/lib/vips.min.js')
    const vips = await Vips()   //parameters are not supported
    const im = vips.Image.black(100, 100);
    console.log(JSON.stringify({
        width: im.width,
        height: im.height,
        space: im.interpretation,
        channels: im.bands,
        depth: im.format
    }))
</script>
```
### Node.js

Not supported，Please use the faster nodejs module [sharp](https://www.npmjs.com/package/sharp)

## Reference

[wasm-vips](https://www.npmjs.com/package/wasm-vips)
