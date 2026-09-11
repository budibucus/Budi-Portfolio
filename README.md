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
| `blog/index.html` | Writing — post listing with tag filter |
| `blog/_template.html` | Copy this to start a new post (not a real page) |
| `blog/<slug>/index.html` | An individual post |
| `assets/css/style.css` | All styling (one file, light theme) |
| `assets/js/main.js` | Nav shadow on scroll, reveal-on-scroll, blog tag filter |
| `Asset/Image/**` | Images (paths use `%20` for spaces) |

## Editing

- **Copy / metrics:** edit the text directly in the relevant `*.html`. Metrics on case studies live
  in the `<dl class="metrics">` block near the top.
- **Add a work card:** copy an `<a class="card reveal">…</a>` block in `index.html` (`#work` section).
- **Add an image:** drop the file in `Asset/Image/…`, reference it with spaces written as `%20`.
- **Colours / fonts:** the `:root` variables at the top of `assets/css/style.css`.

## Adding a blog post

1. Duplicate `blog/_template.html` to `blog/your-post-slug/index.html`.
2. Fill in the title, meta description, tag badge, date, read time, and body copy. The template's
   HTML comments walk through each part.
3. Add a row for it at the top of the `.post-list` in `blog/index.html` (copy the commented example
   block there) — newest post first. Give it a `data-tag` that matches one of the tag pills.
4. If it's a new tag, uncomment or add a matching `<button class="tag-pill">` in `blog/index.html`'s
   `.tag-filter`.
5. Delete (or leave — it just won't show once `.post-list` has rows) the `#empty-state` block in
   `blog/index.html` once at least one post exists.
6. Wire up `<a class="prev">` / `<a class="next">` at the bottom of your post and its neighbors so
   readers can move between posts.

## Preview locally

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy

Push to `main`. GitHub Pages redeploys automatically in ~30s.
