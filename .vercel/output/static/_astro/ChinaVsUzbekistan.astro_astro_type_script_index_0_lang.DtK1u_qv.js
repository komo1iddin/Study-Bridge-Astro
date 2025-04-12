function n(a){const e=window.__comparisonTranslations;if(!e)return;const i={education:{title:e.categories.education.title,china:e.categories.education.china,uzb:e.categories.education.uzb},programs:{title:e.categories.programs.title,china:e.categories.programs.china,uzb:e.categories.programs.uzb},infrastructure:{title:e.categories.infrastructure.title,china:e.categories.infrastructure.china,uzb:e.categories.infrastructure.uzb},teachers:{title:e.categories.teachers.title,china:e.categories.teachers.china,uzb:e.categories.teachers.uzb}}[a];if(!i)return;const r=new URL(window.location.href);r.searchParams.set("category",a),history.pushState({},"",r),document.querySelectorAll("[data-category]").forEach(t=>{t.dataset.category===a?(t.classList.add("bg-white","shadow-sm","border","text-primary","font-medium"),t.classList.remove("hover:bg-gray-100","text-gray-600")):(t.classList.remove("bg-white","shadow-sm","border","text-primary","font-medium"),t.classList.add("hover:bg-gray-100","text-gray-600"))});const c=`
      <div class="border-2 rounded-xl shadow-sm overflow-hidden">
        <div class="bg-muted/10 border-b pb-3 p-6">
          <div class="flex items-center justify-between">
            <h3 class="font-medium text-xl">${i.title}</h3>
            <div class="text-sm text-muted-foreground">${e.compareAnalysis}</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <!-- China Column -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-6 w-6 rounded-full bg-[#DE2910] flex items-center justify-center text-white text-xs font-bold">
                CN
              </div>
              <h4 class="font-medium text-lg">${e.countries.china}</h4>
            </div>
            <hr class="mb-4" />
            <ul class="space-y-4">
              ${i.china.map(t=>`
                <li class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DE2910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>${t}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Uzbekistan Column -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-6 w-6 rounded-full bg-[#1A5BE1] flex items-center justify-center text-white text-xs font-bold">
                UZ
              </div>
              <h4 class="font-medium text-lg">${e.countries.uzbekistan}</h4>
            </div>
            <hr class="mb-4" />
            <ul class="space-y-4">
              ${i.uzb.map(t=>`
                <li class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A5BE1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>${t}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="bg-muted/10 border-t p-4 text-sm text-muted-foreground">
          ${e.dataFrom}
        </div>
      </div>
    `,o=document.getElementById("comparison-content");o&&(o.innerHTML=c)}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("comparison-translations");if(a)try{window.__comparisonTranslations=JSON.parse(a.textContent||"{}")}catch(s){console.error("Error parsing comparison translations:",s)}document.querySelectorAll("[data-category]").forEach(s=>{s.addEventListener("click",i=>{const r=s.dataset.category;r&&n(r)})});const e=document.getElementById("category-select-mobile");e&&e.addEventListener("change",s=>{const i=s.target.value;n(i)})});
