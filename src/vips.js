export default async () => {
  const url_wasm_vips = import.meta.url.replace('wasm-vips-cdn@0.0.17', 'wasm-vips@0.0.12')
  const url_vips_es6 = new URL('vips-es6.js', url_wasm_vips).href
  const url_vips_wasm = new URL('vips.wasm', url_wasm_vips).href
  let scriptContent = await fetch(url_vips_es6).then(resp => resp.ok ? resp.text() : Promise.reject(`Failed to fetch ${url_vips_es6}`))
  scriptContent = scriptContent.replaceAll('vips.wasm', url_vips_wasm).replace('"vips-es6.js",', '')
  const scriptUrl = URL.createObjectURL(new Blob([scriptContent], { type: 'text/javascript' }))
  const { default: Vips } = await import(scriptUrl)
  return await Vips({ dynamicLibraries: [] })
}