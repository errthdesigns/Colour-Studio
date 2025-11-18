import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Matalan Colour Studio - Interactive color analysis experience

// BLACK, WHITE, GREY CATEGORY IMPORTS
import { 
  blackBlazer, 
  blackFurCoat, 
  blackSilverJumper, 
  blackCardigan, 
  blackWhiteDress, 
  blackDress 
} from '../imports/BlackAssets.tsx';
import { 
  whiteFairIsleJumper, 
  whiteShirt, 
  whiteLaceBlouse, 
  whiteTieNeckBlouse, 
  whiteSandals, 
  whiteBroderieDress 
} from '../imports/WhiteAssets.tsx';
import { 
  greyJewelNeckJumper, 
  greyLeggings, 
  greyKnittedDress, 
  greyHerringboneBlazer, 
  greyZipKnitTop, 
  greyBoucleJumper 
} from '../imports/GreyAssets.tsx';

// BROWN, BEIGE, RED CATEGORY IMPORTS
import { 
  brownSequinJumper, 
  brownLeatherLeggings, 
  brownAnimalShawl, 
  brownShirredDress, 
  brownFossilTShirt, 
  brownDaisyCardigan 
} from '../imports/BrownAssets.tsx';
import { 
  beigeFauxFurGilet, 
  beigeStripeJumper, 
  beigeZipHoodie, 
  nudeShirtDress, 
  beigeUtilityJacket, 
  beigeRuffleBlouse 
} from '../imports/BeigeAssets.tsx';
import { 
  redButtonCardigan, 
  redSmartCoat, 
  redSequinDress, 
  burgundyJoggers, 
  cherryHeels, 
  redBowJumpsuit 
} from '../imports/RedAssets.tsx';

// ORANGE, YELLOW, GREEN CATEGORY IMPORTS
import { 
  orangeKnittedCardigan, 
  orangeFloralDress, 
  orangeFlowerPullover 
} from '../imports/OrangeAssets.tsx';
import { 
  yellowCableKnitJumper, 
  yellowBeltedDress, 
  yellowButtonCoat 
} from '../imports/YellowAssets.tsx';
import { 
  greenJumper, 
  darkGreenJumperDress, 
  greenCordShirt 
} from '../imports/GreenAssets.tsx';

// BLUE, PURPLE, PINK CATEGORY IMPORTS
import { 
  blueDaisyCardigan, 
  blueCropTop, 
  blueCozyMiniDress 
} from '../imports/BlueAssets.tsx';
import { 
  purpleChunkyCardigan, 
  purpleJerseyShirt, 
  purpleVelvetBlazer 
} from '../imports/PurpleAssets.tsx';
import { 
  pinkStripedJumper, 
  pinkTieWaistShirt, 
  pinkFloralJumper 
} from '../imports/PinkAssets.tsx';

// GREEN CATEGORY IMPORTS
import greenKnittedDress from 'figma:asset/7b2f6fc6f0a7f70ceb1eaa00f6b14b509b49e3f5.png';
import greenOneShoulderTop from 'figma:asset/08ff04f4c82ee03e50fd0fe30f2b20dfaebb11e8.png';
import greenBroderieDress from 'figma:asset/ab56a8d16935d06fd6f33f1fb6f3ca30ead07f80.png';
import greenPleatedSkirt from 'figma:asset/34b2e360f84e3ecdca4f6a7b2c9c086d793f2c42.png';
import greenStripeShirt from 'figma:asset/8d0b8f8e0ec11f3c29e9e8f3ecb0cb3deafc0eda.png';
import greenFunnelNeckJumper from 'figma:asset/df3c3aec6e50f7bf3e06ff39c41ac60f2f3b7baa.png';

// BLUE CATEGORY IMPORTS
import brownFauxFurCoat from 'figma:asset/9dc1cbe5bdc40fa57b80e5d1e77dcf1f8e66a7b4.png';
import navyOversizedBlazer from 'figma:asset/1fe83f1e1a4e7f7992e73b0a07b64fbb4a80b5f2.png';
import navyCableKnitJumper from 'figma:asset/e0b7e59ff77ea4d3dbff1d9e9327eca92e2b0df1.png';
import tanPufferJacket from 'figma:asset/acbae621e3d70f5c04c10086dd1b63b5da4ae3fb.png';
import blueCardigan from 'figma:asset/b71b7c97d79ba5ea09d74ff93bccc9cdb1ec97d8.png';
import blueBroderieDress from 'figma:asset/4e5c31c055f8097f8f4e3ee34ae8ba75ae11b13c.png';
import blueBoilersuit from 'figma:asset/2c0f9a9c94f4c942d95a37e0acb1f8aaac0dda0e.png';

// RED CATEGORY IMPORTS
import redRibbedJumper from 'figma:asset/be26280aabf6b8e90e7e3b9bd026c64937e6eb18.png';
import burgundyTwistKnitJumper from 'figma:asset/d91c8884ccc928ca5ae2402dae489ec97372384b.png';
import burgundyAcidWashSweatshirt from 'figma:asset/f9ee143aa626f47a1c77cf43244d68537d860492.png';
import redBowTShirt from 'figma:asset/84061869c265e4803aaee7ccca8386d3213b210f.png';

interface ProductItem {
  image: string;
  name: string;
  color: string;
  colorName: string;
  position: { x: string; y: string };
  delay: number;
  link?: string;
}

// Real Matalan product database organized by color
const MATALAN_PRODUCTS_BY_COLOR: Record<string, Array<{
  name: string;
  image: string;
  link?: string;
}>> = {
  green: [
    { 
      name: 'Green Jumper', 
      image: greenJumper,
      link: 'https://www.matalan.co.uk/clothing/green-jumper/16387216.html'
    },
    { 
      name: 'Dark Green High Neck Jumper Dress', 
      image: darkGreenJumperDress,
      link: 'https://www.matalan.co.uk/clothing/dark-green-high-neck-jumper-dress/15935752.html'
    },
    { 
      name: 'Green Cord Shirt', 
      image: greenCordShirt,
      link: 'https://www.matalan.co.uk/clothing/green-cord-shirt/16207423.html'
    },
  ],
  blue: [
    { 
      name: 'Blue Vanilla Blue Daisy Large Flower Cardigan', 
      image: blueDaisyCardigan,
      link: 'https://www.matalan.co.uk/clothing/blue-vanilla-blue-daisy-large-flower-cardigan/15619439.html'
    },
    { 
      name: 'Souluxe Blue Crop Top', 
      image: blueCropTop,
      link: 'https://www.matalan.co.uk/clothing/souluxe-blue-crop-top/16107611.html'
    },
    { 
      name: 'Blue High Neck Cosy Mini Dress', 
      image: blueCozyMiniDress,
      link: 'https://www.matalan.co.uk/clothing/blue-high-neck-cosy-mini-dress/16292052.html'
    },
  ],
  brown: [
    { 
      name: 'Brown Sequin Jumper', 
      image: brownSequinJumper,
      link: 'https://www.matalan.co.uk/clothing/brown-sequin-jumper/16438439.html'
    },
    { 
      name: 'Brown Faux Leather Leggings', 
      image: brownLeatherLeggings,
      link: 'https://www.matalan.co.uk/clothing/brown-faux-leather-leggings/16106284.html'
    },
    { 
      name: 'Brown Animal Print Reversible Shawl', 
      image: brownAnimalShawl,
      link: 'https://www.matalan.co.uk/clothing-accessories/brown-animal-print-reversible-shawl/16208453.html'
    },
    { 
      name: 'Brown Shirred Midi Dress', 
      image: brownShirredDress,
      link: 'https://www.matalan.co.uk/clothing/brown-shirred-midi-dress/17319909.html'
    },
    { 
      name: 'Brown Fossil Fitted T-Shirt', 
      image: brownFossilTShirt,
      link: 'https://www.matalan.co.uk/clothing/brown-fossil-fitted-t-shirt/17318160.html'
    },
    { 
      name: 'Brown Daisy Large Flower Cardigan', 
      image: brownDaisyCardigan,
      link: 'https://www.matalan.co.uk/clothing/blue-vanilla-brown-daisy-large-flower-cardigan/17317256.html'
    },
  ],
  beige: [
    { 
      name: 'Beige Faux Fur Gilet', 
      image: beigeFauxFurGilet,
      link: 'https://www.matalan.co.uk/clothing/beige-faux-fur-gilet/16203786.html'
    },
    { 
      name: 'Beige Stripe Ribbed Knit Jumper', 
      image: beigeStripeJumper,
      link: 'https://www.matalan.co.uk/clothing/beige-stripe-ribbed-knit-jumper/16041527.html'
    },
    { 
      name: 'Beige Zip Up Hoodie', 
      image: beigeZipHoodie,
      link: 'https://www.matalan.co.uk/clothing/beige-zip-up-hoodie/15251357.html'
    },
    { 
      name: 'Nude Textured Midi Shirt Dress', 
      image: nudeShirtDress,
      link: 'https://www.matalan.co.uk/clothing/nude-textured-midi-shirt-dress/15929211.html'
    },
    { 
      name: 'Beige Utility Barn Jacket', 
      image: beigeUtilityJacket,
      link: 'https://www.matalan.co.uk/clothing/beige-utility-barn-jacket/15826405.html'
    },
    { 
      name: 'Beige Ruffle Pussy Bow Blouse', 
      image: beigeRuffleBlouse,
      link: 'https://www.matalan.co.uk/clothing/blue-vanilla-beige-ruffle-pussy-bow-blouse/17535516.html'
    },
  ],
  red: [
    { 
      name: 'Red Button Cardigan', 
      image: redButtonCardigan,
      link: 'https://www.matalan.co.uk/clothing/red-button-cardigan/16341975.html'
    },
    { 
      name: 'Red Smart Coat', 
      image: redSmartCoat,
      link: 'https://www.matalan.co.uk/clothing/red-smart-coat/16292979.html'
    },
    { 
      name: 'Red Satin Bow Back Sequin Dress', 
      image: redSequinDress,
      link: 'https://www.matalan.co.uk/clothing/blue-vanilla-red-satin-bow-back-sequin-dress/17535362.html'
    },
    { 
      name: 'Burgundy Side Stripe Wide Leg Joggers', 
      image: burgundyJoggers,
      link: 'https://www.matalan.co.uk/clothing/brave-soul-burgundy-side-stripe-wide-leg-joggers/17410366.html'
    },
    { 
      name: 'Deep Cherry Jordan Strappy Pointed Toe High Heels', 
      image: cherryHeels,
      link: 'https://www.matalan.co.uk/footwear/where-s-that-from-deep-cherry-jordan-strappy-pointed-toe-high-heels/17383758.html'
    },
    { 
      name: 'Red Bow Back Jumpsuit', 
      image: redBowJumpsuit,
      link: 'https://www.matalan.co.uk/clothing/quiz-red-bow-back-jumpsuit/17475581.html'
    },
  ],
  black: [
    { 
      name: 'Black Blazer', 
      image: blackBlazer,
    },
    { 
      name: 'Black Fur Coat', 
      image: blackFurCoat,
    },
    { 
      name: 'Black & Silver Jumper', 
      image: blackSilverJumper,
    },
    { 
      name: 'Black Cardigan', 
      image: blackCardigan,
    },
    { 
      name: 'Black & White Dress', 
      image: blackWhiteDress,
    },
    { 
      name: 'Black Dress', 
      image: blackDress,
    },
  ],
  white: [
    { 
      name: 'White Fluffy Lurex Fairisle Jumper', 
      image: whiteFairIsleJumper,
      link: 'https://www.matalan.co.uk/clothing/white-fluffy-lurex-fairisle-jumper/16439863.html'
    },
    { 
      name: 'Et Vous White Shirt', 
      image: whiteShirt,
      link: 'https://www.matalan.co.uk/clothing/et-vous-white-shirt/16292936.html'
    },
    { 
      name: 'White Lace High Neck Blouse', 
      image: whiteLaceBlouse,
      link: 'https://www.matalan.co.uk/clothing/white-lace-high-neck-blouse/16387768.html'
    },
    { 
      name: 'White Tie Neck Ruffle Blouse', 
      image: whiteTieNeckBlouse,
      link: 'https://www.matalan.co.uk/clothing/white-tie-neck-ruffle-blouse/16039018.html'
    },
    { 
      name: 'White PU Reydah Sandals', 
      image: whiteSandals,
      link: 'https://www.matalan.co.uk/footwear/where-s-that-from-white-pu-reydah-mid-block-heel-sandals/15330339.html'
    },
    { 
      name: 'White Broderie Anglaise Tiered Dress', 
      image: whiteBroderieDress,
      link: 'https://www.matalan.co.uk/clothing/izabel-london-white-broderie-anglaise-tiered-dress/15451039.html'
    },
  ],
  grey: [
    { 
      name: 'Charcoal Grey Jewel Neck Jumper', 
      image: greyJewelNeckJumper,
      link: 'https://www.matalan.co.uk/clothing/charcoal-grey-jewel-neck-jumper/16342195.html'
    },
    { 
      name: 'Cotton Legging in Charcoal', 
      image: greyLeggings,
      link: 'https://www.matalan.co.uk/clothing/cotton-legging-in-charcoal/15022500.html'
    },
    { 
      name: 'Grey Knitted High Neck Dress', 
      image: greyKnittedDress,
      link: 'https://www.matalan.co.uk/clothing/grey-knitted-high-neck-dress/15931269.html'
    },
    { 
      name: 'Et Vous Grey Herringbone Ponte Blazer', 
      image: greyHerringboneBlazer,
      link: 'https://www.matalan.co.uk/clothing/et-vous-grey-herringbone-ponte-blazer/16043396.html'
    },
    { 
      name: 'Charcoal Grey Zip Collared Knit Top', 
      image: greyZipKnitTop,
      link: 'https://www.matalan.co.uk/clothing/charcoal-grey-zip-collared-snit-top/16292605.html'
    },
    { 
      name: 'Dark Grey Boucle Jumper', 
      image: greyBoucleJumper,
      link: 'https://www.matalan.co.uk/clothing/dark-grey-boucle-jumper/16204729.html'
    },
  ],
  pink: [
    { 
      name: 'Pink Striped Super Soft Jumper', 
      image: pinkStripedJumper,
      link: 'https://www.matalan.co.uk/clothing/pink-striped-super-soft-jumper/15934918.html'
    },
    { 
      name: 'Pink Tie Waist Sleeveless Shirt', 
      image: pinkTieWaistShirt,
      link: 'https://www.matalan.co.uk/clothing/pink-tie-waist-sleeveless-shirt/16439300.html'
    },
    { 
      name: 'Gini London Pink Floral Applique Oversized Jumper', 
      image: pinkFloralJumper,
      link: 'https://www.matalan.co.uk/clothing/gini-london-pink-floral-applique-oversized-jumper/17234993.html'
    },
  ],
  purple: [
    { 
      name: 'Gini London Purple Chunky Knit Long Cardigan', 
      image: purpleChunkyCardigan,
      link: 'https://www.matalan.co.uk/clothing/gini-london-purple-chunky-knit-long-cardigan/17492408.html'
    },
    { 
      name: 'Yours Curve Purple Jersey Placket Shirt', 
      image: purpleJerseyShirt,
      link: 'https://www.matalan.co.uk/clothing/yours-curve-purple-jersey-placket-shirt/17458847.html'
    },
    { 
      name: 'Dusk Purple Velvet Single Breasted Blazer', 
      image: purpleVelvetBlazer,
      link: 'https://www.matalan.co.uk/clothing/dusk-purple-velvet-single-breasted-blazer/17514144.html'
    },
  ],
  orange: [
    { 
      name: 'Orange Knitted Lofty Cardigan', 
      image: orangeKnittedCardigan,
      link: 'https://www.matalan.co.uk/clothing/orange-knitted-lofty-cardigan/17417630.html'
    },
    { 
      name: 'Urban Bliss Orange Floral Smock Dress', 
      image: orangeFloralDress,
      link: 'https://www.matalan.co.uk/clothing/urban-bliss-orange-floral-smock-dress/15408519.html'
    },
    { 
      name: 'Yumi Orange Flower Cable Knit Tie Side Pullover', 
      image: orangeFlowerPullover,
      link: 'https://www.matalan.co.uk/clothing/yumi-orange-flower-cable-knit-tie-side-pullover/17493341.html'
    },
  ],
  yellow: [
    { 
      name: 'Yellow Cable Knit Jumper', 
      image: yellowCableKnitJumper,
      link: 'https://www.matalan.co.uk/clothing/yellow-cable-knit-jumper/16291630.html'
    },
    { 
      name: 'Yellow Belted Mini Tea Dress', 
      image: yellowBeltedDress,
      link: 'https://www.matalan.co.uk/clothing/yellow-belted-mini-tea-dress/15709162.html'
    },
    { 
      name: 'Star by Julien Macdonald Yellow Button Through Coat', 
      image: yellowButtonCoat,
      link: 'https://www.matalan.co.uk/clothing/star-by-julien-macdonald-yellow-button-through-coat/17495346.html'
    },
  ],
};

// Map RGB color to color category name
function getColorCategory(r: number, g: number, b: number): string {
  // Direct RGB check for white/very bright colors (more reliable than HSL)
  // If all RGB values are high, it's likely white regardless of saturation
  if (r > 200 && g > 200 && b > 200) {
    const avg = (r + g + b) / 3;
    if (avg > 220) return 'white';
    if (avg > 180) return 'grey'; // Light grey
  }
  
  const hsl = rgbToHsl(r, g, b);
  const { h, s, l } = hsl;
  
  // Handle greys, blacks, and whites - more lenient thresholds
  if (s < 15) {
    if (l < 20) return 'black';
    if (l > 75) return 'white'; // Lowered from 85 to catch more whites
    return 'grey';
  }
  
  // Also check for high lightness with moderate saturation (off-white, cream)
  if (l > 80 && s < 25) {
    return 'white';
  }
  
  // Handle browns (low saturation warm colors)
  if (h >= 10 && h <= 55 && s < 45 && l < 55) {
    return 'brown';
  }

  // Handle beige/tan (warmer hues but lighter + slightly desaturated)
  if (h >= 20 && h <= 65 && s < 45 && l >= 55) {
    return 'beige';
  }
  
  // Categorize by hue
  if (h >= 350 || h < 10) return 'red';
  if (h >= 10 && h < 35) return 'orange';
  if (h >= 35 && h < 65) return 'yellow';
  if (h >= 65 && h < 170) return 'green';
  if (h >= 170 && h < 250) return 'blue';
  if (h >= 250 && h < 295) return 'purple';
  if (h >= 295 && h < 350) return 'pink';
  return 'red';
}

// Get color hex value for display
function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    brown: '#8B4513',
    beige: '#C9B5A0',
    black: '#000000',
    white: '#F5F5F5',
    green: '#025515',
    blue: '#4A90E2',
    red: '#E30613',
    pink: '#FFB6C1',
    purple: '#8E4585',
    yellow: '#FFD700',
    orange: '#FF8C42',
    grey: '#808080',
  };
  return colorMap[colorName] || '#000000';
}

export function ColorSlide() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameIdRef = useRef<number>();
  
  const [colors, setColors] = useState<string[]>(['#E30613', '#C41E3A']);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(true);
  const [showCameraOption, setShowCameraOption] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [detectedColors, setDetectedColors] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [cameraPermissionChecked, setCameraPermissionChecked] = useState(false);

  // Analyze webcam and extract dominant colors
  const analyzeWebcamColors = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Sample colors from multiple regions focusing on the person
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const samplingRegions = [
      // Face area
      { x: centerX - 30, y: centerY - 20, size: 30 },
      { x: centerX + 30, y: centerY - 20, size: 30 },
      // Hair area
      { x: centerX - 40, y: centerY - 80, size: 40 },
      { x: centerX + 40, y: centerY - 80, size: 40 },
      // Upper body/clothing
      { x: centerX - 60, y: centerY + 40, size: 50 },
      { x: centerX + 60, y: centerY + 40, size: 50 },
    ];
    
    const colorCounts: Record<string, number> = {};
    
    samplingRegions.forEach(region => {
      const imageData = ctx.getImageData(
        Math.max(0, region.x - region.size / 2),
        Math.max(0, region.y - region.size / 2),
        region.size,
        region.size
      );
      
      let r = 0, g = 0, b = 0, count = 0, brightPixels = 0;
      
      for (let i = 0; i < imageData.data.length; i += 4) {
        const pixelR = imageData.data[i];
        const pixelG = imageData.data[i + 1];
        const pixelB = imageData.data[i + 2];
        
        r += pixelR;
        g += pixelG;
        b += pixelB;
        count++;
        
        // More lenient white detection - check if pixel is very bright
        if (pixelR > 200 && pixelG > 200 && pixelB > 200) {
          brightPixels++;
        }
      }
      
      if (count > 0) {
        // Lower threshold - if 20% or more pixels are bright, count as white
        if (brightPixels / count > 0.2) {
          colorCounts['white'] = (colorCounts['white'] || 0) + 1;
          return; // Skip to next region
        }
        
        const avgR = Math.floor(r / count);
        const avgG = Math.floor(g / count);
        const avgB = Math.floor(b / count);
        
        const category = getColorCategory(avgR, avgG, avgB);
        colorCounts[category] = (colorCounts[category] || 0) + 1;
      }
    });
    
    // Get top 4 most detected colors
    const sortedColors = Object.entries(colorCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([color]) => color);
    
    return sortedColors;
  };

  // Build product list based on detected colors
  const buildProductList = (colorCategories: string[]) => {
    const productList: ProductItem[] = [];
    // Responsive positions - spread out to avoid overlap and swatches (now in top-left)
    const positions = [
      { x: '25%', y: '15%' },
      { x: '75%', y: '8%' },
      { x: '5%', y: '55%' },
      { x: '75%', y: '50%' },
      { x: '40%', y: '70%' },
      { x: '50%', y: '20%' },
    ];
    
    let productIndex = 0;
    
    // For each detected color, pick products
    colorCategories.forEach((colorCategory, colorIndex) => {
      const availableProducts = MATALAN_PRODUCTS_BY_COLOR[colorCategory] || [];
      
      // Add 1-2 products per color
      const numProducts = colorIndex < 2 ? 2 : 1;
      for (let i = 0; i < numProducts && productIndex < 6; i++) {
        const productData = availableProducts[i % availableProducts.length];
        if (productData && positions[productIndex]) {
          productList.push({
            image: productData.image,
            name: productData.name,
            color: getColorHex(colorCategory),
            colorName: colorCategory.charAt(0).toUpperCase() + colorCategory.slice(1),
            position: positions[productIndex],
            delay: productIndex * 0.3,
            link: productData.link,
          });
          productIndex++;
        }
      }
    });
    
    return productList;
  };

  const extractColors = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      animationFrameIdRef.current = requestAnimationFrame(extractColors);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Sample colors from different regions of the video for gradient
    const samplingPoints = [
      { x: 0.3, y: 0.3 },
      { x: 0.7, y: 0.7 },
    ];

    const extractedColors: string[] = [];

    samplingPoints.forEach(point => {
      const x = Math.floor(canvas.width * point.x);
      const y = Math.floor(canvas.height * point.y);
      
      const regionSize = 30;
      let r = 0, g = 0, b = 0, count = 0;
      
      for (let dx = -regionSize; dx <= regionSize; dx += 5) {
        for (let dy = -regionSize; dy <= regionSize; dy += 5) {
          const px = Math.max(0, Math.min(canvas.width - 1, x + dx));
          const py = Math.max(0, Math.min(canvas.height - 1, y + dy));
          const imageData = ctx.getImageData(px, py, 1, 1);
          const data = imageData.data;
          
          r += data[0];
          g += data[1];
          b += data[2];
          count++;
        }
      }
      
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);
      
      // Slightly boost saturation for more vibrant colors (reduced from 1.4 to 1.2)
      const hsl = rgbToHsl(r, g, b);
      hsl.s = Math.min(100, hsl.s * 1.2);
      const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
      
      extractedColors.push(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    });

    setColors(extractedColors);
    
    // Continue extracting colors at ~10fps
    setTimeout(() => {
      animationFrameIdRef.current = requestAnimationFrame(extractColors);
    }, 100);
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setShowProducts(false);
    
    // Clear red gradient and start with neutral colors for accurate detection
    setColors(['#2C2C2C', '#4A4A4A']);
    
    // Wait for video to stabilize
    setTimeout(() => {
      // Analyze colors from webcam
      const detectedColorCategories = analyzeWebcamColors();
      if (detectedColorCategories && detectedColorCategories.length > 0) {
        setDetectedColors(detectedColorCategories);
        
        // Build product list based on detected colors
        const productList = buildProductList(detectedColorCategories);
        console.log('Product list built:', productList);
        setProducts(productList);
      } else {
        // Fallback: use demo colors if detection fails
        const fallbackColors = ['grey', 'orange'];
        setDetectedColors(fallbackColors);
        const productList = buildProductList(fallbackColors);
        console.log('Using fallback colors, product list:', productList);
        setProducts(productList);
      }
      
      // Start gradient color extraction if not already running
      if (!animationFrameIdRef.current) {
        extractColors();
      }
    }, 1000);
    
    // After 5 seconds of analysis, show results
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setShowProducts(true);
    }, 5000);
  };

  const tryAgain = () => {
    runAnalysis();
  };

  const checkCameraPermission = async () => {
    try {
      const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
      return result.state === 'granted';
    } catch (err) {
      // If permissions API is not supported, we can't check
      return false;
    }
  };

  const handleStart = async () => {
    setHasStarted(true);
    
    // Check if we already have camera permission
    const hasPermission = await checkCameraPermission();
    
    if (hasPermission || cameraPermissionChecked) {
      // Try to start camera directly without showing the dialog
      await startWebcam();
    } else {
      // Show camera permission dialog
      setShowCameraOption(true);
    }
  };

  const startWebcam = async () => {
    setIsRequesting(true);
    setError(null);
    setDemoMode(false);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setPermissionGranted(true);
        setCameraPermissionChecked(true);
        setError(null);
        setShowCameraOption(false);
        
        // Run initial analysis
        runAnalysis();
      }
    } catch (err: any) {
      setDemoMode(true);
      setPermissionGranted(false);
      setError(null);
      setShowCameraOption(false);
    } finally {
      setIsRequesting(false);
    }
  };

  const startDemoMode = () => {
    setDemoMode(true);
    setError(null);
    setColors(['#E30613', '#C41E3A']);
    return () => {};
  };

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    
    if (demoMode) {
      cleanup = startDemoMode();
    }
    
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, [demoMode]);

  useEffect(() => {
    if (!permissionGranted) {
      setShowProducts(false);
      setIsAnalyzing(false);
      setAnalysisComplete(false);
    }
  }, [permissionGranted]);

  // Format detected colors as text
  const colorText = detectedColors.length > 0
    ? detectedColors.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ')
    : 'Emerald, Mushroom, Black and Plum';

  return (
    <div className="relative size-full overflow-hidden">
      {/* Hidden video and canvas elements for color extraction */}
      <video
        ref={videoRef}
        className="absolute opacity-0 pointer-events-none"
        playsInline
        muted
      />
      <canvas
        ref={canvasRef}
        className="absolute opacity-0 pointer-events-none"
      />

      {/* Animated gradient background - flowing and dynamic */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(60deg, ${colors[0]} 0%, ${colors[1]} 20%, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[0]} 80%, ${colors[1]} 100%)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${colors[1]}40 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, ${colors[0]}60 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Soft lighting glow during analysis */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="absolute inset-0 pointer-events-none z-50"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.4) 100%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Color Swatches */}
      <AnimatePresence>
        {analysisComplete && detectedColors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-8 left-8 max-[1024px]:top-4 max-[1024px]:left-4 z-10"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-4 max-[1024px]:px-3 max-[1024px]:py-3 border border-white/20 flex flex-col gap-3 max-[1024px]:gap-2">
              {detectedColors.map((colorName, index) => (
                <motion.div
                  key={colorName}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 0.7 + (index * 0.1), duration: 0.3 },
                    scale: { delay: 0.7 + (index * 0.1), type: "spring", stiffness: 300, damping: 20 },
                    y: {
                      delay: 1.2 + (index * 0.15),
                      duration: 2 + (index * 0.3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  className="flex items-center gap-3 max-[1024px]:gap-2"
                >
                  <motion.div 
                    className="w-12 h-16 max-[1024px]:w-10 max-[1024px]:h-12 rounded-lg border-2 border-white/50 shadow-lg flex-shrink-0"
                    style={{ backgroundColor: getColorHex(colorName) }}
                    animate={{
                      rotate: [0, 2, -2, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3 + (index * 0.5),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                  <span className="text-white text-sm max-[1024px]:text-xs capitalize" style={{ fontWeight: 300 }}>
                    {colorName}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products that pop up */}
      <AnimatePresence>
        {showProducts && products.length > 0 && products.map((product, index) => (
          <motion.div
            key={`${product.name}-${index}`}
            className="absolute z-30"
            style={{
              left: product.position.x,
              top: product.position.y,
            }}
            initial={{ opacity: 0, scale: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            transition={{
              delay: product.delay,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <div 
              className="relative cursor-pointer group"
              onClick={() => {
                if (product.link) {
                  window.open(product.link, '_blank');
                }
              }}
            >
              {/* Editorial product frame matching Figma design - scaled down */}
              <div className="bg-white relative w-[190px] h-[285px] max-[1024px]:w-[140px] max-[1024px]:h-[210px] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                {/* Colored background panel */}
                <div 
                  className="absolute h-full left-0 top-0 w-[127px] max-[1024px]:w-[94px]"
                  style={{ backgroundColor: product.color }}
                />
                
                {/* Product image */}
                <div className="absolute h-[157px] max-[1024px]:h-[116px] left-[34px] max-[1024px]:left-[25px] top-[77px] max-[1024px]:top-[57px] w-[104px] max-[1024px]:w-[77px]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                
                {/* Large color text overlay */}
                <p 
                  className="absolute font-semibold leading-[38px] max-[1024px]:leading-[28px] left-[95px] max-[1024px]:left-[70px] not-italic text-[40px] max-[1024px]:text-[28px] text-black text-center top-[55px] max-[1024px]:top-[42px] translate-x-[-50%] w-[150px] max-[1024px]:w-[110px] uppercase pointer-events-none"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-3px',
                  }}
                >
                  {product.colorName}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Camera option dialog */}
      {showCameraOption && !permissionGranted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-20">
          <div className="text-center space-y-6 px-4">
            <div className="bg-white/10 text-white px-10 py-8 rounded-2xl backdrop-blur-lg max-w-md mx-auto border border-white/20">
              <p className="mb-8 text-base" style={{ fontWeight: 300 }}>Use your camera to sample live colors from your surroundings</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={startWebcam}
                  disabled={isRequesting}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 w-full rounded-full transition-all flex items-center justify-center gap-2"
                  style={{ fontWeight: 300 }}
                >
                  <Camera className="h-5 w-5" />
                  {isRequesting ? 'Requesting Access...' : 'Enable Camera'}
                </button>
                <button 
                  onClick={() => setShowCameraOption(false)}
                  className="px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 w-full rounded-full transition-all"
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Text and controls */}
      {!hasStarted ? (
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={handleStart}
        >
          {/* Background gradient containers */}
          <div className="absolute h-full left-0 overflow-clip top-0 w-full">
            <div className="absolute h-full left-0 top-0 w-full" />
            <div className="absolute h-full left-0 top-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1412 992\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -110.59 -110.59 0 423.6 496)\\\'><stop stop-color=\\\'rgba(196,30,58,0.25)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(98,15,29,0.125)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>')" }} />
            <div className="absolute h-full left-0 top-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1412 992\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -110.59 -110.59 0 988.4 496)\\\'><stop stop-color=\\\'rgba(227,6,19,0.376)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(114,3,10,0.188)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>')" }} />
          </div>

          {/* Heading */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h1 
                className="text-white text-[96px] max-[1024px]:text-[64px] tracking-[-1.92px] max-[1024px]:tracking-[-1.28px] uppercase"
                style={{ fontWeight: 900, lineHeight: '1' }}
              >
                COLOUR STUDIO
              </h1>
            </motion.div>
          </div>

          {/* Tap anywhere text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-[156px] max-[1024px]:bottom-[100px] left-0 right-0 text-center text-white text-[18px] max-[1024px]:text-[16px] tracking-[-0.4395px] max-[1024px]:tracking-[-0.4px]"
            style={{ fontWeight: 500, lineHeight: '1.5' }}
          >
            Tap anywhere to start
          </motion.p>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-8"
                >
                  <h1
                    className="text-white text-[96px] max-[1024px]:text-[64px] tracking-[-1.92px] max-[1024px]:tracking-[-1.28px] uppercase"
                    style={{ fontWeight: 900, lineHeight: '1' }}
                  >
                    ANALYSING...
                  </h1>
                </motion.div>
              ) : analysisComplete ? (
                <motion.div
                  key="colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center px-8"
                >
                  <h1
                    className="text-white text-[96px] max-[1024px]:text-[64px] tracking-[-1.92px] max-[1024px]:tracking-[-1.28px] uppercase mb-6 max-[1024px]:mb-4"
                    style={{ fontWeight: 900, lineHeight: '1' }}
                  >
                    YOUR COLOURS
                  </h1>
                  <p className="text-white text-lg" style={{ fontWeight: 300 }}>
                    {colorText} are your colours.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center px-8"
                >
                  <h1 className="text-white text-8xl tracking-tight" style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
                    OWN YOUR COLOUR
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="absolute top-8 right-8 max-[1024px]:top-4 max-[1024px]:right-4 flex items-center gap-3 max-[1024px]:gap-2 z-10">
            {permissionGranted && (
              <>
                <div className="flex items-center gap-2 px-4 py-2 max-[1024px]:px-3 max-[1024px]:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm max-[1024px]:text-xs" style={{ fontWeight: 300 }}>Camera Active</span>
                </div>
                {analysisComplete && (
                  <button
                    onClick={tryAgain}
                    className="px-5 py-2 max-[1024px]:px-4 max-[1024px]:py-1.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full border border-white/20 transition-all text-sm max-[1024px]:text-xs"
                    style={{ fontWeight: 300 }}
                  >
                    Try Again
                  </button>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Helper functions for color manipulation
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}
