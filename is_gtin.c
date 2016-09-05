#include <stdio.h>
#include <string.h>
#include <ctype.h>

static unsigned int threesandones[18] = {3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,0};

int is_gtin(const char *gtin) {
	
	int len = (int)strlen(gtin);
	switch(len) {
		case 8:
		case 12:
		case 13:
		case 14:
		case 17:
		case 18:
			break;
		default:
			return 0;
	}
	
	unsigned int *multiplier = threesandones + (18 - len);
	unsigned int checksum = 0;
	unsigned int digit;

	while(*gtin) {
		if(!isdigit(*gtin)) return 0;
		digit = *gtin++ - '0';
		checksum += digit * *multiplier++;
	}

	unsigned int mod = checksum % 10;
	return digit == (mod == 0 ? 0 : 10 - mod);
}

int main(int argc, char **argv) {
	if(is_gtin(argv[1])) {
		printf("Yes, '%s' is valid\n", argv[1]);
	}
	else {
		printf("No, '%s' is not valid\n", argv[1]);
	}
}
