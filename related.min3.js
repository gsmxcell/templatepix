(function (f, n) {
	"use strict";
	"undefined" !== typeof va && va.ready(function () {
		f.d = function (a) {
			var c = va.byTag("head")[0],
				g = n.createElement("script");
			g.async = !0;
			g.src = a;
			va.append(c, g)
		};
		f.e = function (a) {
			var c = a.length;
			if (0 === c) return !1;
			for (; --c;) {
				var g = Math.floor(Math.random() * (c + 1)),
					k = a[c];
				a[c] = a[g];
				a[g] = k
			}
			return a
		};
		f.getRelated = function (a) {
			a = a.feed.openSearch$totalResults.$t - relatedSettings.results;
			a = Math.floor(Math.random() * ((0 < a ? a : 1) - 1 + 1)) + 1;
			d(relatedSettings.homepage.replace(/\/$/, "") + "/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + relatedSettings.results + "&callback=relatedPosts")
		};
		f.relatedPosts = function (a) {
			var c = va.byId("related-posts");
			a = e(a.feed.entry);
			var g = relatedSettings.styles,
				k = "<ul>",
				f = relatedSettings.blank ? ' target="_blank"' : "";
			if (c) {
				for (var b = 0; b < relatedSettings.results && b != a.length; b++) {
					var h = a[b].title.$t,
						p = "auto" !== relatedSettings.title_length && relatedSettings.title_length < h.length ? h.substring(0, relatedSettings.title_length) + "&hellip;" : h,
						q = "media$thumbnail" in a[b] ? a[b].media$thumbnail.url.replace(/.*?:\/\//g, "//").replace("s72-c", "w300") : relatedSettings.noimage.replace(/.*?:\/\//g, "//").replace("s1600", "w300"),
						n = "summary" in a[b] && 0 < relatedSettings.snippet_length ? a[b].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, relatedSettings.snippet_length) + "&hellip;" : "",
						l = 0,
						r = a[b].link.length;
					for (; l < r; l++) var m = "alternate" == a[b].link[l].rel ? a[b].link[l].href : "#";
					2 == g ? k += '<li><div class="related-thumbnail">
					<img class="lazy" data-src="' + q + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" + relatedSettings.mask + '" alt="' + h + '"><a class="related-post-title" title="' + h + '" href="' + m + '"' + f + ">" + p + '</a><span class="related-summary"><span class="related-snippet">' + n + '</span><a tabindex="-1" href="' + m + '" title="' + relatedSettings.read_more + '" class="related-more"' + f + ">" + relatedSettings.read_more + "</a></span></li>" : 1 == g && (k += '<li><a tabindex="-1" title="' + h + '" href="' + m + '"' + f + '><div class="related-thumbnail">
					<img class="lazy" data-src="' + q + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" + relatedSettings.mask + '" alt="' + h + '"></a><a class="related-post-title" title="' + h + '" href="' + m + '"' + f + ">" + p + "</a></li>")
				}
				va.html(c, k + "</ul>");
				"undefined" !== typeof eraMaterial && eraMaterial.loadImages()
			}
		};
		d(relatedSettings.homepage.replace(/\/$/, "") + "/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=getRelated")
	})
})(window, document);
