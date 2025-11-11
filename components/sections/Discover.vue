<template>
  <UiSectionWrapper v-if="shouldShowDiscover" class="flex-col">
    <!-- Heading -->
    <UiSectionContainer>
      <h2 v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          type: 'ease-in',
          stiffness: 250,
          damping: 25,
          mass: 1,
        },
      }" v-if="showTitle"
        class="pb-[24px] font-defaultSerif text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black md:text-left">
        {{ discover?.title || 'Discover Our Products' }}
      </h2>
    </UiSectionContainer>

    <UiCardCarousel :items="productList" @item-click="openModal" />

    <!-- Product Modal -->
    <UiProductModal :is-open="isModalOpen" :product="selectedProduct" @close="closeModal" />
  </UiSectionWrapper>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSiteTextStore } from "~/stores/siteText";
import { useCRMStore } from "~/stores/crmStore";

const siteTextStore = useSiteTextStore();
const crmStore = useCRMStore();

// Destructure site text sections
const discover = computed(() => siteTextStore.getHomeText()?.discover);
const shouldShowDiscover = computed(() => (discover.value?.show ?? true));

defineProps({
  showTitle: {
    type: Boolean,
    default: false,
  },
});

// Modal state
const isModalOpen = ref(false);
const selectedProduct = ref(null);

const fallbackProducts = computed(() =>
  (discover.value?.fallbackProducts || []).map((product) => ({
    id: product.id,
    imageSrc: product.image?.src || "",
    imageAlt: product.image?.alt || product.productName,
    productName: product.productName,
    price: product.price,
    isBestSeller: product.isBestSeller,
  }))
);

// Product list - computed to use API data or fallback
const productList = computed(() => {
  const apiProducts = crmStore.getProductBundles;
  const fallbackItems = fallbackProducts.value;

  // If we have API data, transform it to match the expected format
  if (apiProducts && apiProducts.length > 0) {
    return apiProducts.map((bundle, index) => {
      const fallback =
        fallbackItems.length > 0
          ? fallbackItems[index % fallbackItems.length]
          : {};
      return {
        id: bundle.id,
        imageSrc: bundle.imageUrl || fallback.imageSrc,
      imageAlt: bundle.name || `Product ${index + 1}`,
      productName: bundle.name || `Product ${index + 1}`,
      price: bundle.price ? `$${bundle.price}` : "$0",
      isBestSeller: bundle.tag === "BEST_SELLER" || bundle.tag === "bestseller" || index === 1,
      originalBundle: bundle // Store original data for modal
    };
    });
  }
  
  // Fallback to hardcoded products if no API data
  return fallbackItems;
});

// Open modal with product data
const openModal = (product) => {
  selectedProduct.value = product.originalBundle || product;
  isModalOpen.value = true;
};

// Close modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedProduct.value = null;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
