# Budi Susilo — portfolio

Static site, no build step. GitHub Pages serves the files as-is (`.nojekyll` disables Jekyll).
Live at <https://budibucus.github.io/Budi-Portfolio/>.

## Structure

| File | What it is |
|---|---|
| `index.html` | Landing page — hero, logo strip, selected work, how I work, contact |
| `home-credit/index.html` | Case study — Home Credit Indonesia |
| `rey-id/index.html` | Case study — Rey.id |
| `waresix/index.html` | Case study — Waresix |
| `geekzwolf/index.html` | Case study — Geekzwolf |
| `assets/css/style.css` | All styling (one file, light theme) |
| `assets/js/main.js` | Nav shadow on scroll + reveal-on-scroll animation |
| `Asset/Image/**` | Images (paths use `%20` for spaces) |

## Editing

- **Copy / metrics:** edit the text directly in the relevant `*.html`. Metrics on case studies live
  in the `<dl class="metrics">` block near the top.
- **Add a work card:** copy an `<a class="card reveal">…</a>` block in `index.html` (`#work` section).
- **Add an image:** drop the file in `Asset/Image/…`, reference it with spaces written as `%20`.
- **Colours / fonts:** the `:root` variables at the top of `assets/css/style.css`.

## Preview locally

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy

Push to `main`. GitHub Pages redeploys automatically in ~30s.
