import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Definimos el array de elementos de tipo Producto
  products: Product[] = [
    {
      id: 1,
      nombre: "VIDEO GEFORCE RTX 3050 8GB GIGABYTE EAGLE",
      imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3050-8gb-gigabyte-eagle-0.jpg",
      descripcion: `Graphics Processing GeForce RTX™ 3050
      Core Clock 1777 MHz
      CUDA® Cores 2560
      Memory Clock 14000 MHz
      Memory Size 8GB
      Memory Type GDDR6
      Memory Bus 128 bit
      Memory Bandwidth (GB/sec) 224GB/s
      Card Bus PCI-E 4.0
      Digital max resolution 7680x4320
      Multi-view 4
      Card size L=213 W=120 H=41 mm
      PCB Form ATX
      DirectX 12 Ultimate
      OpenGL 4.6
      Recommended PSU 450W
      Power Connectors 8 pin*1
      Output DisplayPort 1.4a *2 / HDMI 2.1 *2`,
      precio: "199.783",
      stock: 5
    },
    {
      id: 2,
      nombre: `NOTEBOOK LENOVO 15.6" V15 RYZEN 5 5500U 8GB 256GB WIN11H R5`,
      imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/notebook-lenovo-156-v15-ryzen-5-5500u-8gb-256gb-win11h-r5-0.jpg",
      descripcion: `PERFORMANCE
      Processor AMD Ryzen 5 5500U (6C / 12T, 2.1 / 4.0GHz, 3MB L2 / 8MB L3)
      Graphics Integrated AMD Radeon Graphics
      Chipset AMD SoC Platform
      Memory 8GB Soldered DDR4-3200
      Memory Slots One memory soldered to systemboard, one DDR4 SO-DIMM slot, dual-channel capable
      Max Memory Up to 16GB (8GB soldered + 8GB SO-DIMM) DDR4-3200 offering
      Storage 256GB SSD M.2 2242 PCIe x4 NVMe
      Storage Support Models with 38Wh battery: up to two drives, 1x 2.5" HDD + 1x M.2 SSD
      • 2.5" HDD up to 1TB
      • M.2 2242 SSD up to 512GB
      Storage Slot Models with 38Wh battery: one 2.5" drive slot + one M.2 slot
      • One 2.5" SATA HDD slot
      • One M.2 2280 PCIe 3.0 x4 slot
      Card Reader None
      Optical None
      Audio Chip High Definition (HD) Audio, Realtek ALC3287 codec
      Speakers Stereo speakers, 1.5W x2, Dolby Audio
      Camera 0.3MP with Privacy Shutter
      Microphone 2x, Array
      Battery Integrated 38Wh
      Max Battery Life MobileMark 2018: 7.5 hr (38Wh)
      Power Adapter 65W Round Tip (3-pin)`,
      precio: "329.000",
      stock: 10
    },
    {
      id: 3,
      nombre: `MONITOR GAMER 25" SAMSUNG ODYSSEY G4 FHD 240HZ DP HDMI`,
      imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-25-samsung-odyssey-g4-fhd-240hz-dp-hdmi-0.jpg",
      descripcion: `Marca : Samsung
      P/N : LS25BG400ELXZB
      Color : Negro
      Tamaño de panel : 25"
      Curvo/Plano : Plano
      Colores : 16.7M
      Tipo de panel : IPS
      Resolución : 1920 x 1080 FHD
      Ángulo de vision : 178 grados / 178 grados
      Parlantes : No
      Conectividad : 1 x Display Port, 2 x HDMI, 1 x USB, 1 x miniplug
      Frecuencia de actualizacion : 240 Hz
      Tiempo de respuesta (ms) : 1 ms
      Voltaje : 100-240 V, 50/60 Hz
      Inclinación : Si
      Giratorio : Si
      Pivote : Si
      Ajuste en altura : Si
      Freesync/Gsync : G-Sync`,
      precio: "139.951",
      stock: 12
    },
    {
      id: 4,
      nombre: `VIDEO GEFORCE RTX 3070 8GB GIGABYTE GAMING OC LHR`,
      imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3070-8gb-gigabyte-gaming-oc-lhr-0.jpg",
      descripcion: `Características:
      Multiprocesadores NVIDIA Ampere Streaming
      Núcleos RT de segunda generación
      Núcleos de tensor de tercera generación
      Desarrollado por GeForce RTX ™ 3070
      Integrado con interfaz de memoria GDDR6 de 256 bits de 8 GB
      Sistema de enfriamiento WINDFORCE 3X con ventiladores giratorios alternativos
      RGB Fusion 2.0
      Placa trasera metálica de protección
      4 años de garantía (se requiere registro en línea)
      Especificaciones:
      Procesamiento de gráficos GeForce RTX ™ 3070 LHR
      Reloj de núcleo TBD
      Núcleos CUDA® 5888
      Reloj de la memoria 14000 MHz
      Tamaño de la memoria 8 GB
      Tipo de memoria GDDR6
      Bus de memoria 256 bits
      Ancho de banda de memoria (GB / seg) 448 GB / s
      Bus de tarjeta PCI-E 4.0 x 16
      Resolución máxima digital 7680 x 4320 a 60 Hz
      Vista múltiple 4
      Tamaño de la tarjeta L = 286 W = 115 H = 51 mm
      Forma de PCB ATX
      DirectX 12 Ultimate
      OpenGL 4.6
      PSU recomendada 650W
      Conectores de poder 8 pines * 1 + 6 pines * 1
      Salida DisplayPort 1.4a * 2 HDMI 2.1 * 2
      Soporte SLI N / A`,
      precio: "313.284",
      stock: 0
    },
    {
      id: 5,
      nombre: `MONITOR GAMER CURVO 32" SAMSUNG ODYSSEY G5 WQHD 165HZ 1MS DP`,
      imagen: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-curvo-32-samsung-odyssey-g5-wqhd-165hz-1ms-dp-0.jpg",
      descripcion: `Impresionante WQHD
      Tu mundo de juegos, ahora asombrosamente realista. Con 1,7 veces la densidad de píxeles de Full HD, la resolución WQHD ofrece imágenes increíblemente detalladas y nítidas. Experimentá una vista más completa con más espacio para disfrutar de toda la acción.
      
      Frecuencia de actualización de 165Hz
      Listo para conquistar enemigos, retrasar y difuminar. La frecuencia de actualización ultrarrápida de 165 Hz maneja incluso las escenas más emocionantes y las imágenes más rápidas.
      
      Tiempo de respuesta de 1 ms
      Cada movimiento cuenta con un tiempo de respuesta de 1 ms. Su rendimiento en pantalla es tan rápido como tus propios reflejos. Accioná sobre tus enemigos tan pronto los veas.
      
      AMD FreeSync Premium
      Jugá fluidamente y sin esfuerzo. AMD FreeSync Premium cuenta con tecnología de sincronización adaptativa que reduce el tearing, el stuttering y la latencia de entrada.
      
      `,
      precio: "199.783",
      stock: 8
    }
  ];

  getProductos(): Product[] {
    return this.products;
  }
  
}
