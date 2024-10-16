<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white shadow" height="70">
            <div>
                <ul class="md:flex md:items-center">
                    <li class="md:mx-4" v-for="link in Links">
                        <NuxtLink class="" :to="link.link">{{link.name}}</NuxtLink>
                    </li>
                </ul>
            </div>
        
            <div class="absolute right-5">
                <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar alt="Alex Svetlov" size="sm" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    setup(){
        let Links = [
            {name: "Home", link: "/"},
            {name: "Auth", link: "/auth"},
            {name: "Secrets", link: "/secret"},
    ]
    const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
    ]
    return{Links, items}
    }
}
</script>


<style scoped lang="scss">
a:hover,
a:active,
a:focus-visible,
a:focus {
    color: grey;
}

// a.dropdown-item:hover {
//     color: #77a86c;
// }
</style>
