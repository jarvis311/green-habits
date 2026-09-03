/**
 * Thin abstraction over "where is the map coming from". Phase 1 uses a free,
 * no-API-key Google Maps "place" embed and a directions deep link. Swapping
 * to the full Google Maps JS SDK or Mapbox GL later only means changing the
 * two functions below — every call site (LocationSection, LocationCard)
 * stays the same.
 */

export function getDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function getEmbedUrl(address: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
}
